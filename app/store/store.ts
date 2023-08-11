import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  locationReducer  from "./reducers/locationSliсe";
import  routeReducer  from "./reducers/routesSlice";
import logger from 'redux-logger';



const rootReducer = combineReducers({
   locationReducer,
   routeReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer,
        //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({
                serializableCheck: false
            })
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

