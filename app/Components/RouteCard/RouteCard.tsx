import Card from "@mui/material/Card";


export default function RouteCard({start, destination}){

    return(
        <Card>
            <p>{start}</p>
            <p>{destination}</p>
        </Card>
    )
}