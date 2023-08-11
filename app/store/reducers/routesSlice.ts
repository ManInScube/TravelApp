import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type LatLngLiteral = google.maps.LatLngLiteral;    
type DirectionResult = google.maps.DirectionsResult;

// interface Route {
//     original: LatLngLiteral,
//     destination: LatLngLiteral
// }

interface IRoute {
    result: DirectionResult
}

const initialState: IRoute = {
    //"routes":[]
    result: {"routes":[]}
} 

export const routesSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        addRoute: (state, action: PayloadAction<DirectionResult>)=>{
            state.result = action.payload
        }
    }
})

export default routesSlice.reducer;