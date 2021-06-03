import { Button, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, makeStyles, TextField, Tooltip, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../Action_Creators/projectActions";


const useStyles = makeStyles(theme => ({
  addButton: {
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    transition: theme.transitions.create(['height'])
  }
}))


const ProjectDialog = () => {

    const classes = useStyles()
    const [open, setOpen] = useState(false);                // Dialog
    const [buttonHover, setButtonHover] = useState(false);  // hover above +
    const [name, setName] = useState("");         // Dialog Project Name
    const [description, setDescription] = useState("");          // Dialog Description
    const [nameError, setNameError] = useState(false);

    const dispatch = useDispatch();

    const handleCreate = () => {
      if(!nameError && name !== ""){
        setOpen(false);

        // Submitted form
        dispatch(addProject({
          name: name, 
          description: description
        }))

        handleClose()

      }  
    }

    const handleClose = () => {
      setOpen(false);
      setName("");
      setDescription("");
    }

    useEffect(() => {
      setNameError(name.length === 0);
    }, [name]);

    return ( 
      <React.Fragment>
      {/* Button */}
      <Tooltip title="Create new project">
        <Fab aria-label="add" variant="extended" onClick={() => setOpen(true)} onMouseOver={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)} size="small" color="primary" className={classes.addButton}>
          <Add />
          <Collapse collapsedHeight='0px' in={buttonHover} orientation="horizontal">
            {buttonHover && <Typography>Project</Typography>}
          </Collapse>
        </Fab>
      </Tooltip>
      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New Project</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Creating Workspace for: {name}
            </DialogContentText>
            <TextField autoFocus id="name" label="Name" value={name} onChange={e => setName(e.target.value)} error={nameError} helperText={nameError ? "Cannot be empty" : ""} placeholder="Project Name" margin="dense"/>
            <TextField id="desc" label="Description" value={description} onChange={e => setDescription(e.target.value)} fullWidth multiline placeholder="Short description" margin="dense"/>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleCreate}>
              Create
            </Button>
            <Button color="primary" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        </React.Fragment>
     );
}
 
export default ProjectDialog;