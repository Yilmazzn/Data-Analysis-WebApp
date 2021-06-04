import Type from "../Action_Creators/actionTypes";

const snackbarReducer = (state = [], action) => {
    switch (action.type) {

        case Type.SHOW_SNACKBAR:
            return {
                open: true, 
                severity: action.payload.severity, 
                message: action.payload.message, 
            }

        case Type.CLOSE_SNACKBAR: 
            return {...state, open: false} 

        default:
            return state; 
    }
}

export default snackbarReducer