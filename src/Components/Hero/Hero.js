import React from "react";
import useStyles from "./styles";

const Hero = () => {

    const classes = useStyles();

    return ( 
        <div className={classes.heroContainer}>
            <h1> HELLOOO</h1>
            <video src="/videos/blue.mp4" className={classes.video} autoPlay loop muted />
        </div>
    );
}
 
export default Hero;