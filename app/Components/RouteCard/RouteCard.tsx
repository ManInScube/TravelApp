import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";


export default function RouteCard({start, destination}){

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
            <TextField
                id="filled-required"
                label="Origin"
                defaultValue={destination}
                variant="filled"
            />
        </Card>
    )
}