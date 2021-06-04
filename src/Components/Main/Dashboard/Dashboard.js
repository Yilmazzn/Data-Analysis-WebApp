import { Grid, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(theme => ({
    cardItem: {
        padding: '20px'
    },
    container: {
        overflowX: 'hidden'
    }
}))


const Dashboard = () => {

    const projects = useSelector(state => state.projects)
    const classes = useStyles();

    return ( 
        <Grid container spacing={4} className={classes.container}>
            {projects.map(p => (
                <Grid item xl={12} lg={12} md={12} xs={12} className={classes.cardItem} key={p.id}>
                    <ProjectCard project={p}/>
                </Grid>
            ))}
            
        </Grid>
    );
}
 
export default Dashboard;