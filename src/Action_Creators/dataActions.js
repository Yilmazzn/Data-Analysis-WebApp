import { setLoadingState } from "./loadingActions"
import firebase from '../firebase'
import Type from "./actionTypes";
import { showSnackbar } from "./snackbarActions";

export const fetchProjectData = id => async (dispatch) => {
    dispatch(setLoadingState(true));

    firebase.firestore().collection('data').doc(id).get()
        .then(docSnapshot => {
            if(docSnapshot.exists){
                dispatch({ type: Type.FETCH_DATA, payload: { id:id, data:docSnapshot.data()} })
            }else{
                dispatch({ type: Type.FETCH_DATA, payload: { id:id, data:{}}})
            }
        })
        .catch(error => {
            console.error(error);
            dispatch(showSnackbar("error", "Could not load data"))
        })
        .finally(() => {
            dispatch(setLoadingState(false))
        })
}

export const uploadProjectData = (id, data) => async (dispatch) => {
    console.log(data);
    firebase.firestore().collection('data').doc(id).set(Object.assign({}, data))
        .then(() => {
            dispatch({ type: Type.UPLOAD_DATA, payload: {id:id, data:data} })
            dispatch(showSnackbar("success", "Data uploaded"));
        })
        .catch(error => {
            console.error(error);
            dispatch(showSnackbar("Data upload failed"));
        })
        .finally(() => {
            dispatch(setLoadingState(false));
        })
}