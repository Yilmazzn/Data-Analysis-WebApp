import Type from "./actionTypes"

export const showSnackbar = (severity, message) => {
    return {
        type: Type.SHOW_SNACKBAR,
        payload: {
            severity: severity, 
            message: message
        }
    }
}

export const closeSnackbar = () => {
    return {
        type: Type.CLOSE_SNACKBAR
    }
}