'use client'

import NavBar from "./NavBar";
import Map from "./Map";
import './styles.css'
import Sidebar from "./Components/Sidebar/Sidebar";
import Box from '@mui/material/Box';
import { useState } from "react";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();
export default function Page() {

    const [routes, setRoutes] = useState<any[]>([]);


    
    function handleRoutes (val){
      setRoutes([...routes, val]);
    }

    function removeRoute(id){
      console.log("id " + id);
      setRoutes(routes.filter((route, index)=>index!==id))
    }

    return (
        <Provider store={store}>
          <Box sx={{ display: 'flex' }}>
              <NavBar />
              <Sidebar routes={routes} handler={removeRoute}/>
              <Box component="main" sx={{ flexGrow: 20, pt: 7 }}>
                <Map addRoutes={handleRoutes} />
              </Box>
          </Box>
        </Provider>


            
        

    )
}