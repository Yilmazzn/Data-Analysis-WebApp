import { CircularProgress, Container, Grid, LinearProgress, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import ProjectDialog from "./ProjectDialog";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import firebase from '../../../firebase'
import React from "react";
import { fetchProjects } from "../../../Action_Creators/projectActions";

const useStyles = makeStyles(theme => ({
    cardItem: {
        padding: theme.spacing(3)
    },
    container: {
        overflowX: 'hidden', 
        padding: theme.spacing(1)
    },
    loading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        paddingTop: theme.spacing(2)
    }
}))


const Dashboard = () => {

    const projects = useSelector(state => state.projects)
    const classes = useStyles();
    const [loading, setLoading] = useState(true);

    // Load all projects into redux store
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProjects(setLoading));
    }, [])


    if(loading){
        return(
            <Container className={classes.loading}>
                <CircularProgress />
                <Typography variant="body2" className={classes.loadingText}>Loading Projects...</Typography>
            </Container>
        )
    }

    return ( 
        <React.Fragment>
        <ProjectDialog />
        <Grid container spacing={4} className={classes.container} justify="center">
            {projects.map(p => (
                <Grid item xl={12} lg={12} md={12} xs={12} className={classes.cardItem} key={p.id}>
                    <ProjectCard project={p}/>
                </Grid>
            ))}
        </Grid>
        </React.Fragment>
    );
}
 
export default Dashboard;