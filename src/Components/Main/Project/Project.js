import { Box, Card, CardActions, CardContent, Container, Grid, makeStyles, Stepper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ProjectSteps } from "../../../Model/Project";
import ProgressStepper from "./ProgressStepper";

const useStyles = makeStyles(theme => ({
    header: {
        marginBottom: theme.spacing(2)
    },
    stepper: {

    },
    card: {
        display: 'flex',
        flexDirection: 'column'
    }

}))

const Project = (props) => {
    const project = useSelector(state => state.projects.filter(p => p.id === props.match.params.id)[0])
    const classes = useStyles();

    const [currentStep, setStep] = useState(project.step);

    return ( 
        <React.Fragment>
            <div className={classes.header}>
                <Typography variant="h2" > {project.name} </Typography>
                <Box pt={4} />
                <Typography variant="h4" > {project.description} </Typography>
            </div>
            <Grid item xl={10}>
                <Card className={classes.card}>
                    <ProgressStepper activeStep={currentStep} setActiveStep={setStep} />
                    <CardActions>
                    
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
     );
}
export default Project;