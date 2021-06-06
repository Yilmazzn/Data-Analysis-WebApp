import Type from "../Action_Creators/actionTypes";

const projectDetailReducer = (state = {}, action) => {
    switch(action.type){

        case Type.FETCH_DATA:
            return action.payload

        case Type.UPLOAD_DATA: 
            return action.payload  
        default: 
        return state; 
    }
}
 
export default projectDetailReducer;