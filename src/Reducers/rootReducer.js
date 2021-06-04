import { combineReducers } from "redux"
import projectDetailReducer from "./projectDetailReducer"
import projectReducer from './projectReducer'
import snackbarReducer from './snackbarReducer'

const rootReducer = combineReducers({
    projects: projectReducer,
    projectDetails: projectDetailReducer,
    snackbar: snackbarReducer
})


export default rootReducer