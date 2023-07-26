'use client'

import NavBar from "./NavBar";
import Map from "./Map";
import './styles.css'
import Sidebar from "./Components/Sidebar/Sidebar";
import Box from '@mui/material/Box';
import { useState } from "react";


export default function Page() {

    const [routes, setRoutes] = useState<any[]>([]);
    
    function handleRoutes (val){
      setRoutes([...routes, val]);
    }

    return (
        
    <Box sx={{ display: 'flex' }}>
        <NavBar />

        <Sidebar routes={routes} />
        <Box component="main" sx={{ flexGrow: 20, pt: 7 }}>
          <Map addRoutes={handleRoutes} />
        </Box>
    </Box>
            
        

    )
}