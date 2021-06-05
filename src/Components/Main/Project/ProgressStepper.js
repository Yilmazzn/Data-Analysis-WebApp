import { Box, Button, Grid, makeStyles, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { MaximizeTwoTone } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stepNextProject } from "../../../Action_Creators/projectActions";
import { optionalSteps, ProjectSteps } from "../../../Model/Project";


const useStyles = makeStyles(theme => ({
    buttonGroup: {
        display: 'flex',
        padding: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }
    },
    buttonLeft: {
        margin: theme.spacing(0.5)
    },
    buttonRight: {
        margin: theme.spacing(0.5)
    }
}))


const ProgressStepper = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { id, step } = props.project;

    const handleSkip = () => {
        dispatch(stepNextProject(id))
    }

    return ( 
        <React.Fragment>
        <Stepper activeStep={step} alternativeLabel>
            {Object.keys(ProjectSteps).map(index => (
                    <Step key={index}>
                        <StepLabel>{ProjectSteps[index]}</StepLabel>
                    </Step>
            ))}
        </Stepper>
        <div className={classes.buttonGroup}>
            {
                step  !== Object.keys(ProjectSteps).length - 1 && 
                <React.Fragment>
                    <Button variant="contained" color="primary" className={classes.buttonLeft}>{buttonLabel[step]}</Button>
                    <Button variant="outlined" color="primary" onClick={handleSkip} className={classes.buttonRight}> Skip </Button>
                </React.Fragment>
            } 
        </div>
        </React.Fragment>
    );
}



const buttonLabel = {
    0: "Import",
    1: "Evaluate",
}
 
export default ProgressStepper;