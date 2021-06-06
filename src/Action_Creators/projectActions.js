import Type from './actionTypes'
import firebase from '../firebase'
import { showSnackbar } from './snackbarActions';

const firestore = firebase.firestore();

export const addProject = (name, desc, tags) => async (dispatch) => {

    const _id = ID();
    const project = {
        name: name, 
        description: desc, 
        tags: tags
    }
    firestore.collection('projects').doc(_id).set(project)
        .then(() => {
            dispatch({ type: Type.ADD_PROJECT, payload: {...project, id:_id } });
            dispatch(showSnackbar("success", `${name} successfully created`));
        })
        .catch(error => {
            console.error(error);
            dispatch(showSnackbar("error", "There was an error. Project could not be created"));
        })
} 

export const editProject = (id, name, desc) => async (dispatch) => {
    firebase.firestore().collection('projects').doc(id).update({
        name: name, 
        description: desc
    })
        .then(() => {
            dispatch({ type: Type.EDIT_PROJECT, payload: {newName: name, newDesc: desc, id:id } });
            dispatch(showSnackbar("info", `${name} edited`));
        })
        .catch(error => {
            console.error(error);
            dispatch(showSnackbar("error", "There was an error. Project could not be edited"));
        });

}

export const deleteProject = (id) => async (dispatch) => {
    firebase.firestore().collection('projects').doc(id).delete()
        .then(() => {
            dispatch({ type: Type.DELETE_PROJECT, payload: id });
            dispatch(showSnackbar("info", `Project was deleted`))
        })
        .catch(error => {
            console.error(error);
            dispatch(showSnackbar("error", "Error while trying to communicate with the server"));
        })
}

export const fetchProjects = (setLoading) => async(dispatch) => {
firebase.firestore().collection('projects').onSnapshot(
    querySnapshot => {
        if (!querySnapshot.metadata.hasPendingWrites){
            let projects = []
            querySnapshot.forEach(doc => projects.push({...doc.data(), id:doc.id}));
            dispatch({ type:Type.FETCH_PROJECTS, payload:projects });
        }
        setLoading(false);
    }, error => {
        console.error(error);
        dispatch(showSnackbar("error", "Server Error 501"))
    })
};

// Generates IDs
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  