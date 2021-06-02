import { AppBar, Badge, Box, Container, Divider, Drawer, Grid, IconButton, List, ListSubheader, Popover, Toolbar, Typography } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";
import clsx from "clsx";
import { useState } from "react";
import Copyright from "./Copyright";
import { mainListItems, SecondaryListItems } from "./listItems";
import useStyles from "./styles";




const Main = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);        // Drawer
    const [notifications, setAmountNotifications] = useState(0);        // notifications number
    const [anchorNotif, setAnchorNotif] = useState(null);   // For popover

    return (
        <div className={classes.root}>
            <AppBar color="inherit" position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="primary" noWrap className={classes.title}>
                        Analyser
                    </Typography>
                    <IconButton color="primary" onClick={event => setAnchorNotif(event.currentTarget)}>
                        <Badge badgeContent={notifications} color="secondary" max={9}>
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <Popover open={anchorNotif != null} anchorEl={anchorNotif} onClose={() => setAnchorNotif(null)} 
                        anchorOrigin={{ 
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    > 
                        <Typography> Helloooo </Typography>
                    </Popover>
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
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                    </Grid>
                </Container>

                <Box pt={4}>
                    <Copyright />
                </Box>
            </main>
            
            
        </div>
    );
}
 
export default Main;