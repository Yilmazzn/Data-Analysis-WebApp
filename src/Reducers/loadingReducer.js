import ActionTypes from "../Action_Creators/actionTypes";

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.SET_LOADING:
            return action.payload;
        default:
            return state; 
    }
}
 
export default loadingReducer;