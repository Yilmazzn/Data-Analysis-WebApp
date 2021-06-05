import Type from '../Action_Creators/actionTypes'

const projectReducer = (state = [], action) => {
    switch(action.type){

        case Type.ADD_PROJECT:
            return [...state, {
                id: action.payload.id,
                name: action.payload.name, 
                description: action.payload.description,
                category: action.payload.category,
                step: 0
            }];

        case Type.EDIT_PROJECT: 
            return state.map(
                p => p.id !== action.payload.id ? p : 
                {...p, name: action.payload.newName, description: action.payload.newDesc});

        case Type.DELETE_PROJECT: 
            return state.filter(p => p.id !== action.payload);

        case Type.STEP_NEXT_PROJECT: 
            return state.map(p => p.id === action.payload ? {...p, step: p.step + 1} : p)

        default: 
        return state;
    }
}


// Save 

export default projectReducer