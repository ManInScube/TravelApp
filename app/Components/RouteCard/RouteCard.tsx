import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import ClearIcon from '@mui/icons-material/Clear';
import { Icon } from '@mui/material';




export default function RouteCard({start, handler, id}){

    return(
        <Card>
            {/* <p>{start}</p>
            <p>{destination}</p> */}
            <TextField
                id="filled-required"
                label="Origin"
                defaultValue={start}
                variant="filled"
            />
            {/* <TextField
                id="filled-required"
                label="Origin"
                defaultValue={destination}
                variant="filled"
            /> */}
           
                <ClearIcon onClick={()=>handler(id)} />
             
        </Card>
    )
}