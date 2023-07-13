'use client'
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api";
import {useCallback, useEffect, useRef, useState, useMemo} from 'react';

import usePlacesAutocomplete from "use-places-autocomplete";
import PlaceSearch from "./PlaceSearch";
import { Box, Input } from "@mui/material";
import BasicSelect from "./UI/Select/Select";


type LatLngLiteral = google.maps.LatLngLiteral;    
type DirectionResult = google.maps.DirectionsResult;
type DirectionWaypoint = google.maps.DirectionsWaypoint;
type MapOptions = google.maps.MapOptions;

const libraries:string[] = ["places"];

export default function Map(){
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

            useEffect(()=>{
                buildRoute(destinationPoint);
            },[stops]);
    
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

        await dirService.route(
            {
                origin: originPoint,
                destination: dest,
                // waypoints: [
                //     {location: {lat: 57.24047038843604, lng: 37.8380564694735}}
                // ],
                waypoints: stops,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if(status==="OK" && result){
                    setDestination(result)
                    console.log(result);
                }
            }
        )
    }


    function addPlace(val){
        setMarkers([...markers, val]);
        setDestinationPoint(val);
        buildRoute(val);
    }

    function addOrigin(val){
        setMarkers([...markers, val]);
        setOriginPoint(val);
    }

    function addStop(val){
        let stop = {location: val};
        setMarkers([...markers, val]);
        setStops([...stops, stop]);
    }

    function MapLocal(){
        return (
        <>
            <div>
                
                {/* <PlaceSearch addPlace={addPlace} setOrigin={addOrigin} setOffice={(position)=>{
                    setOffice(position);
                    mapRef.current?.panTo(position);
                }}/> */}

                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} sx={{width:500}}>
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
                </Box>


                
                {/* <BasicSelect/> */}

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
            </GoogleMap>
        </>
        )
    }

}