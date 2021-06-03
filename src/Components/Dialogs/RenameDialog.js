import { Button,  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renameProject } from "../../Action_Creators/projectActions";

const RenameDialog = (props) => {
        // Props
    const { open, setOpen, projectId } = props;
        // Get project with given key
    const project = useSelector(state => state.projects.filter(p => p.id === projectId)[0])

    const [ name, setName ] = useState("");
    const [ nameError, setNameError ] = useState(false);    
        

    const dispatch = useDispatch()
    const handleRename = () => {
        if(!nameError){
            dispatch(renameProject(projectId, name));
            setOpen(false);
        }   
    }

    useEffect(() => {
        setNameError(name === "")
    }, [name]);

    return (
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-rename">
            <DialogTitle id="form-dialog-title">Rename</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Rename Project '{project.name}''
            </DialogContentText>
            <TextField autoFocus id="newName" label="New Name" value={name} onChange={e => setName(e.target.value)} error={nameError} helperText={nameError? "Cannot be empty" : ""} margin="dense"/>
            </DialogContent>
            <DialogActions>
            <Button color="primary" onClick={handleRename}>
                Rename
            </Button>
            <Button color="primary" onClick={() => setOpen(false)}>
                Cancel
            </Button>
            </DialogActions>
        </Dialog>
    );
}

export default RenameDialog;