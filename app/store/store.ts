import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  locationReducer  from "./reducers/locationSliсe";

const rootReducer = combineReducers({
   locationReducer 
})


export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

