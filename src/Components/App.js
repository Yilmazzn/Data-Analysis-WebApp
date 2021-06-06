
import { makeStyles } from "@material-ui/core";
import React from "react";
import { Redirect } from "react-router";
import Main from "./Main/Main";

const useStyles = makeStyles((theme) => ({
    
}))

const App = () => {

    const classes = useStyles()

    return (
        <React.Fragment>
            <Main />
        </React.Fragment>
    );
}


 
export default App;