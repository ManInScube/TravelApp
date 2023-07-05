'use client'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {useEffect, useState} from 'react';

import usePlacesAutocomplete from "use-places-autocomplete";
import PlaceSearch from "./PlaceSearch";


export default function Map(){
    const [centerMap, setCenterMap] = useState<LatLngLiteral>({lat:0, lng:0});

    const [markers, setMarkers] = useState<LatLngLiteral[]>([
            {lat:54.702800971968976, lng: 20.74240559049013},
            {lat:54.66514866433478, lng:21.81557985296381}]
            );

    type LatLngLiteral = google.maps.LatLngLiteral;    

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDwz43Woz_Flwh0o4pg2AEuVQBy1uJBLi8",
        libraries: ["places"]
    });

    if(!isLoaded) return <div>Loading...</div>;
    return <MapLocal/>

    useEffect(()=>{
        CalcCenter();
    }, [])

    function CalcCenter(){
        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;
        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;
        setCenterMap({lat, lng});
    }
  
    function MapLocal(){
        return (
        <>
            <div>
                <PlaceSearch />
            </div>
            <GoogleMap
                zoom={10}
                center={centerMap}
                mapContainerClassName="map-container"
            >
                {markers.map((marker)=><Marker position={marker}/>)}
            </GoogleMap>
        </>
        )
    }

    const PlacesAutocomplete = () => {

    }
}