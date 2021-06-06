import ActionTypes from "./actionTypes"

export const setLoadingState = loading => {
    return { type: ActionTypes.SET_LOADING, payload: loading }
}