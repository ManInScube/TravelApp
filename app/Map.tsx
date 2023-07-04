'use client'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map(){
//     // Initialize and add the map
// let map;
// async function initMap(): Promise<void> {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };

//   // Request needed libraries.
//   //@ts-ignore
//   const { GooleMap } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
//   const { AdvancedMarkerView } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

//   // The map, centered at Uluru
//   map = new GooleMap(
//     document.getElementById('map') as HTMLElement,
//     {
//       zoom: 4,
//       center: position,
//       mapId: 'DEMO_MAP_ID',
//     }
//   );

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: 'Uluru'
//   });
// }

// initMap()

    let markers = [];
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDwz43Woz_Flwh0o4pg2AEuVQBy1uJBLi8",
    });

    if(!isLoaded) return <div>Loading...</div>;
    return <MapLocal/>
  
    function MapLocal(){
        return (
        <GoogleMap
            zoom={10}
            center={{lat:44, lng:-80}}
            mapContainerClassName="map-container"
        >
            
        </GoogleMap>
        )
    }
}