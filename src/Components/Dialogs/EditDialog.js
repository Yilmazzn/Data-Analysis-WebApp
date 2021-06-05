import { Button,  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProject } from "../../Action_Creators/projectActions";
import { showSnackbar } from "../../Action_Creators/snackbarActions";

const EditDialog = (props) => {
        // Props
    const { open, setOpen, projectId } = props;
        // Get project with given key
    const project = useSelector(state => state.projects.filter(p => p.id === projectId)[0])

    const [ name, setName ] = useState(project.name);
    const [desc, setDesc] = useState(project.description)
    const [ nameError, setNameError ] = useState(false);    
        

    const dispatch = useDispatch()
    const handleEdit = () => {
        if(!nameError){
            dispatch(editProject(projectId, name, desc));
            dispatch(showSnackbar("info", `Renamed to ${name}`))
            setOpen(false);
        }   
    }

    useEffect(() => {
        setNameError(name === "")
    }, [name]);

    return (
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-rename">
            <DialogTitle id="form-dialog-title">Edit</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Edit Project '{project.name}''
            </DialogContentText>
            <TextField autoFocus id="newName" label="New Name" value={name} onChange={e => setName(e.target.value)} error={nameError} helperText={nameError? "Cannot be empty" : ""} margin="dense"/>
            <TextField id="newDesc" label="Description" value={desc} onChange={e => setDesc(e.target.value)} margin="dense" multiline fullWidth/>
            </DialogContent>
            <DialogActions>
            <Button color="primary" onClick={handleEdit}>
                Edit
            </Button>
            <Button color="primary" onClick={() => setOpen(false)}>
                Cancel
            </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditDialog;