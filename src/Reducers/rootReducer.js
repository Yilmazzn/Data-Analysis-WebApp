import { combineReducers } from "redux"
import loadingReducer from "./loadingReducer"
import dataReducer from "./dataReducer"
import projectReducer from './projectReducer'
import snackbarReducer from './snackbarReducer'

const rootReducer = combineReducers({
    projects: projectReducer,
    data: dataReducer,
    snackbar: snackbarReducer,
    loading: loadingReducer
})


export default rootReducer