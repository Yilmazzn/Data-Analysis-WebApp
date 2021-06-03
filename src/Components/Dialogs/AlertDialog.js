import { Button,  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import React from "react";

const AlertDialog = (props) => {

    const { label, onConfirm, open, setOpen } = props;


    return ( 
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Delete Project</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {label}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onConfirm} color="primary">
                    Confirm
                </Button>
                <Button onClick={() => setOpen(false)} color="primary" autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
     );
}
 
export default AlertDialog;