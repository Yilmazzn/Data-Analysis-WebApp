import { Button, Card, CardActions, CardContent, CardHeader, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, makeStyles, Popover, TextField } from "@material-ui/core";
import { ExpandMore, MoreVert } from "@material-ui/icons";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../Action_Creators/projectActions";
import AlertDialog from "../../Dialogs/AlertDialog";
import RenameDialog from "../../Dialogs/RenameDialog";



const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '300px'
    },
    container: {
        display: 'flex'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}))



const ProjectCard = (props) => {
    const { project } = props; 
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [renameOpen, setRenameOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const open = Boolean(anchorEl);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProject(project.id));
    }


    return ( 
        <Card className={classes.root}>
            <CardHeader title={project.name} subheader="01.01.2021" 
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
                        <Button onClick={() => setRenameOpen(true)} >Edit</Button>
                        <Button onClick={() => setDeleteOpen(true)}>Delete</Button>
                    </Popover>
                </React.Fragment>
            }/>
            <Divider />
            <CardContent>
                Graph, Status, etc. ...
            </CardContent>
            <Divider />
            <CardContent>
                {project.description}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded})}
                    onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-label="show more">  
                    <ExpandMore /> 
                </IconButton>
            </CardActions>
            {/* Dialog for Renaming */}
            <RenameDialog open={renameOpen} setOpen={setRenameOpen} projectId={project.id}/>
            <AlertDialog open={deleteOpen} setOpen={setDeleteOpen} onConfirm={handleDelete} label={`Are you sure you want to delete '${project.name}' ? `} />
        </Card>
    );
}
 
export default ProjectCard;