import { combineReducers } from "redux"
import projectDetailReducer from "./projectDetailReducer"
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
    projects: projectReducer,
    projectDetails: projectDetailReducer,
})


export default rootReducer