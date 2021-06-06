import { CircularProgress, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import ProjectDialog from "./ProjectDialog";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import React from "react";
import { fetchProjects } from "../../../Action_Creators/projectActions";
import LoadingComponent from "../../Loading/LoadingComponent";
import { setLoadingState } from "../../../Action_Creators/loadingActions";

const useStyles = makeStyles(theme => ({
    cardItem: {
        padding: theme.spacing(3)
    },
    container: {
        overflowX: 'hidden', 
        padding: theme.spacing(1)
    }
}))


const Dashboard = () => {

    const projects = useSelector(state => state.projects)
    const classes = useStyles();
    const loading = useSelector(state => state.loading)

    // Load all projects into redux store
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProjects());
    }, [])

    if(loading){
        return(
            <LoadingComponent text="Loading Projects..." />
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