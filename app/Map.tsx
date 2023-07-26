'use client'
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer, Polyline } from "@react-google-maps/api";
import {useCallback, useEffect, useRef, useState, useMemo} from 'react';

import usePlacesAutocomplete from "use-places-autocomplete";
import PlaceSearch from "./PlaceSearch";
import { Box, Icon, Input } from "@mui/material";
import BasicSelect from "./UI/Select/Select";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';


type LatLngLiteral = google.maps.LatLngLiteral;    
type DirectionResult = google.maps.DirectionsResult;
type DirectionWaypoint = google.maps.DirectionsWaypoint;
type MapOptions = google.maps.MapOptions;
type TravelMode = google.maps.TravelMode;


const libraries:string[] = ["places"];

export default function Map({addRoutes}){
    // const [centerMap, setCenterMap] = useState<LatLngLiteral>({lat:54.702800971968976, lng: 20.74240559049013});
    const [office, setOffice] = useState<LatLngLiteral>();
    const [originPoint, setOriginPoint] = useState<LatLngLiteral>({lat:0,lng:0});
    const [destinationPoint, setDestinationPoint] = useState<LatLngLiteral>({lat:0,lng:0});
    const [destination, setDestination] = useState<DirectionResult>();
    const [stops, setStops] = useState<DirectionWaypoint[]>([]);
    const [markers, setMarkers] = useState<LatLngLiteral[]>([
            {lat:54.702800971968976, lng: 20.74240559049013},
            {lat:54.66514866433478, lng:21.81557985296381}]
            );
    const[mode, setMode] = useState("DRIVING");
    const[interRes, setInterRes] = useState({});

    useEffect(()=>{
        buildRoute(destinationPoint);
    },[stops, mode]);

    useEffect(()=>{
        if(Object.keys(interRes).length == 2){
            handleRoute(interRes);
            setInterRes({});
        } 
    },[interRes]);
    
    const mapRef = useRef<GoogleMap>();

    const center = useMemo<LatLngLiteral>(
        () => ({lat:54.702800971968976, lng: 20.74240559049013}),
        []
      );

    const options = useMemo<MapOptions>(
        () => ({
          disableDefaultUI: true,
          clickableIcons: false,
        }),
        []
      );

    const onLoad = useCallback((map)=>(mapRef.current=map),[]);


    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
        libraries: libraries,
    });

    if(!isLoaded) return <div>Loading...</div>;
    return <MapLocal/>

    function CalcCenter(){
        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;
        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;
        //setCenterMap({lat, lng});
    }
  
    //TODO: add transit points / TravelMode.TRANSIT
    
    async function buildRoute (dest: LatLngLiteral) {
        console.log("before");

        if(!origin) return;
        
        console.log("after");
        const dirService = new google.maps.DirectionsService();

        const flightPath = new google.maps.Polyline({
            path: markers,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        }) 

        
        
        await dirService.route(
            {
                origin: originPoint,
                destination: dest,
                waypoints: stops,
                travelMode: mode
            },
            (result, status) => {
                if(status==="OK" && result){
                    setDestination(result);
                    //addRoutes(result.geocoded_waypoints);
                    console.log(result);
                }
            }
        )
    }

    function buildFlight(){
        //Polyline drowing
    }

    function addPlace(val, locationName){
        setInterRes({...interRes, destination: locationName});
        // if(Object.keys(interRes).length == 2){
        //     handleRoute(interRes);
        //     setInterRes({});
        // } 
        setMarkers([...markers, val]);
        setDestinationPoint(val);
        buildRoute(val);
    }

    function addOrigin(val, locationName){
        setInterRes({...interRes, start: locationName});
        // if(Object.keys(interRes).length == 2){
        //     handleRoute(interRes);
        //     setInterRes({});
        // } 
        setMarkers([...markers, val]);
        setOriginPoint(val);
    }

    function addStop(val){
        let stop = {location: val};
        setMarkers([...markers, val]);
        setStops([...stops, stop]);
    }

    function addMode(val: TravelMode){
        setMode(val);
        console.log(mode);
    }

    function handleRoute(val){
        addRoutes(val);
    }  

    function handleInterRes(){
        //if(Object.keys(interRes).length > 0) setInterRes()
    }

    function FlightIcon(){
        return(
            <Icon />
        )
    }

    function MapLocal(){
        return (
        <>
            <div>
                {/* <PlaceSearch addPlace={addPlace} setOrigin={addOrigin} setOffice={(position)=>{
                    setOffice(position);
                    mapRef.current?.panTo(position);
                }}/> */}

                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} /*sx={{width:500}}*/>
                    <PlaceSearch placeholder="Starting point" handler={addOrigin} setOrigin={addOrigin} setOffice={(position)=>{
                        setOffice(position);
                        mapRef.current?.panTo(position);
                        
                    }}/>
                    <PlaceSearch placeholder="Destination point" handler={addPlace} setOrigin={addOrigin} setOffice={(position)=>{
                        setOffice(position);
                        mapRef.current?.panTo(position);
                    }}/>
                    <PlaceSearch placeholder="Transit points" handler={addStop} setOrigin={addOrigin} setOffice={(position)=>{
                        setOffice(position);
                        mapRef.current?.panTo(position);
                    }}/>

                    <BasicSelect handler={addMode}/>
                </Box>

            </div>
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName="map-container"
                options={options}
                onLoad={onLoad}
            >
                {destination && <DirectionsRenderer directions={destination}/>}
                {/* {destination && destination.map((item)=><DirectionsRenderer directions={item} />)} */}
                {markers.map((marker)=><Marker position={marker} />)}

                <Polyline
                    path={markers}            
                    options={{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 5,
                        icons: [
                            {
                                icon: AirplaneTicketIcon,
                                offset: "0",
                                repeat: "20px"
                            }
                        ]
                    }}
                />
            </GoogleMap>
        </>
        )
    }

}