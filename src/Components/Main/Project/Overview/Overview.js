import { Box, Typography } from "@material-ui/core";

const Overview = props => {

    const {project} = props; 

    return ( 
        <div>
            <Typography variant="h3" > {project.name} </Typography>
            <Box pt={2} />
            <Typography variant="h5" > {project.description} </Typography>
        </div>
     );
}
 
export default Overview;