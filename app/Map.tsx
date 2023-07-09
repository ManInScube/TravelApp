'use client'
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api";
import {useEffect, useRef, useState} from 'react';

import usePlacesAutocomplete from "use-places-autocomplete";
import PlaceSearch from "./PlaceSearch";

type DerectionResult = google.maps.DirectionsResult;

export default function Map(){
    const [centerMap, setCenterMap] = useState<LatLngLiteral>({lat:0, lng:0});
    const [office, setOffice] = useState<LatLngLiteral>();
    const [currentPoint, setCurrentPoint] = useState<LatLngLiteral>({lat:0, lng:0});
    const [destination, setDestination] = useState<DerectionResult>();

    const [markers, setMarkers] = useState<LatLngLiteral[]>([
            {lat:54.702800971968976, lng: 20.74240559049013},
            {lat:54.66514866433478, lng:21.81557985296381}]
            );
    
            useEffect(()=>{
                //CalcCenter();
                buildRoute;
            }, [destination])
    
    const mapRef = useRef<GoogleMap>();

    type LatLngLiteral = google.maps.LatLngLiteral;    

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDwz43Woz_Flwh0o4pg2AEuVQBy1uJBLi8",
        libraries: ["places"]
    });

    if(!isLoaded) return <div>Loading...</div>;
    return <MapLocal/>



    function CalcCenter(){
        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;
        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;
        setCenterMap({lat, lng});
    }
  


    //TODO: add transit points / TravelMode.TRANSIT
    
    function buildRoute (destination: LatLngLiteral) {
        const dirService = new google.maps.DirectionsService();

        //TODO: if markers > 1

        dirService.route(
            {
                origin: markers[1],
                destination: markers[0],
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if(status==="OK" && result){
                    setDestination(result)
                }
            }
        )
    }


    function addPlace(val){
        setMarkers([...markers, val]);
        //buildRoute(val);
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
                {markers.map((marker)=><Marker position={marker} />)}
            </GoogleMap>
        </>
        )
    }

}