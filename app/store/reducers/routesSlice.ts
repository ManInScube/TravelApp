import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type LatLngLiteral = google.maps.LatLngLiteral;    

// interface Route {
//     original: LatLngLiteral,
//     destination: LatLngLiteral
// }

interface Route {
    original: LatLngLiteral,
    destination: LatLngLiteral
}

const initialState: Route = {
    original: {lat:0, lng:0},
    destination: {lat:0, lng:0}
} 

export const routesSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        addOriginal: (state, action: PayloadAction<LatLngLiteral>) => {
            state.original = action.payload
        }
    }
})