import { AppBar, Badge, Box, Container, Divider, Drawer, Fab, Grid, IconButton, List, ListSubheader, Popover, Toolbar, Tooltip, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { mainListItems, SecondaryListItems } from "./listItems";
import useStyles from "./styles";
import ProjectDialog from "./ProjectDialog";
import Dashboard from "./Dashboard/Dashboard";




const Main = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);        // Drawer

    return (
        <div className={classes.root}>
            <AppBar color="inherit" position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" noWrap className={classes.title}>
                        Analyser
                    </Typography>
                    <ProjectDialog />
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}} open={open} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <div className={classes.listItemsGap} />
                <List>{mainListItems}</List>
                <Divider />
                <ListSubheader inset>Projects</ListSubheader>
                <List><SecondaryListItems /></List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} /> 
                {/* Dialog form popup new project*/}
                <Container maxWidth="xl" className={classes.container}>
                    <Dashboard />
                </Container>
            </main>
            
            
            
            
        </div>
    );
}
 
export default Main;