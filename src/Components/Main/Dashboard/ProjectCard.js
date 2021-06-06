import { Button, Card, CardActions, CardContent, CardHeader, Chip, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, LinearProgress, Link, makeStyles, Popover, TextField, Typography } from "@material-ui/core";
import { ExpandMore, MoreVert } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteProject } from "../../../Action_Creators/projectActions";
import AlertDialog from "../../Dialogs/AlertDialog";
import EditDialog from "../../Dialogs/EditDialog";;



const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '300px'
    },
    container: {
        display: 'flex'
    },
    openButton: {
        marginLeft: theme.spacing(1),
    },
    tag: {
        marginBottom: theme.spacing(2)
    }
}))



const ProjectCard = (props) => {
    const { project } = props; 
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [renameOpen, setRenameOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const open = Boolean(anchorEl);

    const dispatch = useDispatch();
    const history = useHistory(); 

    const handleDelete = () => {
        dispatch(deleteProject(project.id));
    }

    const handleOpen = () => {
        history.push(`/projects/${project.id}`)
    }


    return ( 
        <Card className={classes.root}>
            <CardHeader title={project.name} subheader="01.01.2021" titleTypographyProps={{noWrap: true}}  subheaderTypographyProps={{variant: "body2"}}
            action={
                <React.Fragment>
                    <IconButton aria-label="settings" onClick={e => setAnchorEl(e.currentTarget)}>
                        <MoreVert />
                    </IconButton>
                    <Popover open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} onExit={() => setAnchorEl(null)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                                vertical: 'center',
                                horizontal: 'right',
                        }}
                        disableRestoreFocus>
                        <Button onClick={() => {setRenameOpen(true); setAnchorEl(null)}} >Edit</Button>
                        <Button onClick={() => {setDeleteOpen(true); setAnchorEl(null)}}>Delete</Button>
                    </Popover>
                </React.Fragment>
            }/>
            <Divider />
            <CardContent>
                {project.tags.map(tag => 
                    <Chip variant="outlined" color="primary" label={tag} className={classes.tag} key={tag}/>
                )}
                <LinearProgress variant="determinate" value={33} />
            </CardContent>
            <Divider />
            <CardContent>
                {project.description}
            </CardContent>
            <CardActions disableSpacing>
                <Button variant="outlined" color="secondary" onClick={handleOpen} className={classes.openButton}>
                    Open
                </Button>
            </CardActions>



            {/* Dialogs */}
            <EditDialog open={renameOpen} setOpen={setRenameOpen} projectId={project.id}/>
            <AlertDialog open={deleteOpen} setOpen={setDeleteOpen} onConfirm={handleDelete} label={`Are you sure you want to delete '${project.name}' ? `} />
        </Card>
    );
}

export default ProjectCard;