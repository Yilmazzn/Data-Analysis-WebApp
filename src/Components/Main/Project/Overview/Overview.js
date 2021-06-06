import { Box, Typography } from "@material-ui/core";
import { useState } from "react";
import LoadingComponent from "../../../Loading/LoadingComponent";

const Overview = props => {

    const {project} = props; 

    const [loading, setLoading ] = useState(typeof project === "undefined")

    if (loading) {
        return (
            <LoadingComponent text="Loading Project..." />
        );
    }

    return ( 
        <div>
            <Typography variant="h3" > {project.name} </Typography>
            <Box pt={2} />
            <Typography variant="h5" > {project.description} </Typography>
        </div>
     );
}
 
export default Overview;