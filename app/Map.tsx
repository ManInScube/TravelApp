'use client'
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api";
import {useEffect, useRef, useState} from 'react';

import usePlacesAutocomplete from "use-places-autocomplete";
import PlaceSearch from "./PlaceSearch";
import { Input } from "@mui/material";

type DirectionResult = google.maps.DirectionsResult;
type DirectionWaypoint = google.maps.DirectionsWaypoint;

export default function Map(){
    const [centerMap, setCenterMap] = useState<LatLngLiteral>({lat:54.702800971968976, lng: 20.74240559049013});
    const [office, setOffice] = useState<LatLngLiteral>();
    const [currentPoint, setCurrentPoint] = useState<LatLngLiteral>({lat:54.702800971968976, lng: 20.74240559049013});
    const [destination, setDestination] = useState<DirectionResult>();
    const [stops, setStops] = useState([]);

    const [markers, setMarkers] = useState<LatLngLiteral[]>([
            {lat:54.702800971968976, lng: 20.74240559049013},
            {lat:54.66514866433478, lng:21.81557985296381}]
            );
    
            // useEffect(()=>{
            //     //CalcCenter();
            //     buildRoute;
            // }, [destination])
    
    const mapRef = useRef<GoogleMap>();

    type LatLngLiteral = google.maps.LatLngLiteral;    

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
        libraries: ["places"],
    });

    if(!isLoaded) return <div>Loading...</div>;
    return <MapLocal/>

    function CalcCenter(){
        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;
        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;
        setCenterMap({lat, lng});
    }
  


    //TODO: add transit points / TravelMode.TRANSIT
    
    async function buildRoute (dest: LatLngLiteral) {
        console.log("before");

        //if(!destination) return;
        
        console.log("after");
        const dirService = new google.maps.DirectionsService();

        //TODO: if markers > 1

        await dirService.route(
            {
                origin: markers[1],
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
        buildRoute(val);
    }

    function MapLocal(){
        return (
        <>
            <div>
                <PlaceSearch addPlace={addPlace} setOffice={(position)=>{
                    setOffice(position);
                    mapRef.current?.panTo(position);
                }}/>
            </div>
            <GoogleMap
                zoom={10}
                center={centerMap}
                mapContainerClassName="map-container"
            >
                {destination && <DirectionsRenderer directions={destination}/>}
                {/* {destination && destination.map((item)=><DirectionsRenderer directions={item} />)} */}
                {markers.map((marker)=><Marker position={marker} />)}
            </GoogleMap>
        </>
        )
    }

}