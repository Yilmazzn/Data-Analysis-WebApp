import { AppBar, Badge, Box, Container, Divider, Drawer, Fab, Grid, IconButton, List, ListSubheader, Popover, Toolbar, Tooltip, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { MainListItems, mainListItems, SecondaryListItems } from "./listItems";
import useStyles from "./styles";
import ProjectDialog from "./Dashboard/ProjectDialog";
import Dashboard from "./Dashboard/Dashboard";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Project from "./Project/Project";
import SnackbarFeedback from "../Snackbar/SnackbarFeedback";




const Main = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);        // Drawer

    const history = useHistory()

    return (
        <div className={classes.root}>
            <SnackbarFeedback />

            <AppBar color="inherit" position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" noWrap className={classes.title}>
                        Analyser
                    </Typography>
                    
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}} open={open} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <div className={classes.listItemsGap} />
                <List><MainListItems history={history}/></List>
                <Divider />
                <ListSubheader inset>Projects</ListSubheader>
                <List><SecondaryListItems history={history}/></List>
            </Drawer>

            <main className={classes.content}>
                
                <div className={classes.appBarSpacer} /> 
                <Container maxWidth="xl" className={classes.container}>
                    
                    <Redirect from="/" to="/dashboard" /> 
                    <Switch>
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/projects/:id" component={Project} />
                    </Switch>
                </Container>
            </main>
            
            
            
            
        </div>
    );
}
 
export default Main;