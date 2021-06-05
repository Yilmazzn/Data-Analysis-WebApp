import { Box, Card, CardActions, CardContent, Container, Grid, makeStyles, Paper, Stepper, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProjectSteps } from "../../../Model/Project";
import Overview from "./Overview/Overview";
import ProgressStepper from "./ProgressStepper";

const useStyles = makeStyles(theme => ({
    stepper: {

    },
    card: {
        display: 'flex',
        flexDirection: 'column'
    },
    completed: {

    },
    circle: {

    },
    tab: {
        marginTop: theme.spacing(-2.5),
        marginBottom: theme.spacing(3)
    },
    container: {

    }
}))

const Project = (props) => {
    const project = useSelector(state => state.projects.filter(p => p.id === props.match.params.id)[0])
    const classes = useStyles();

    const [view, setView] = useState(0)

    const handleTabChange = (event, newValue) => {
        setView(newValue);
    }

    return ( 
        <React.Fragment>
        <Paper className={classes.tab}>
            <Tabs value={view} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                {tabs.map((tab, index) => <Tab label={tab} key={index} />)}
            </Tabs>
        </Paper>
            <Container disableGutters className={classes.container}>
                {view === 0 && <Overview project={project}/>}
            </Container>
        </React.Fragment>
     );
}

const tabs = [
    'Overview', 'Data'
]

export default Project;