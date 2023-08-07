import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type LatLngLiteral = google.maps.LatLngLiteral;    

interface ILocation {
    id: number,
    name: string,
    coordinates: LatLngLiteral
}

const initialState: Array<ILocation> = [{
    id: 0,
    name: '',
    coordinates: {lat:0, lng:0}
} ]

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        addOriginal: (state, action: PayloadAction<ILocation>) => {
            // state.id += 1,
            // state.name = action.payload.name,
            // state.coordinates = action.payload.coordinates
            state.push(action.payload)                                                                                                                                                             
        }
    }
})

export default locationSlice.reducer;