import { Snackbar } from "@material-ui/core";
import { Alert } from '@material-ui/lab'
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "../../Action_Creators/snackbarActions";

const SnackbarFeedback = () => {

    const options = useSelector(state => state.snackbar);
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway'){
            return; 
        }
        
        dispatch(closeSnackbar())
        
    }

    return (
        <Snackbar open={options.open} autoHideDuration={6000} onClose={handleClose} 
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
            <Alert elevation={6} variant="filled" onClose={handleClose} severity={options.severity}>
                {options.message}
            </Alert>
        </Snackbar>
    );
}
 
export default SnackbarFeedback;