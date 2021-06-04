import Type from './actionTypes'

export const addProject = (project) => {
    return {
        type: Type.ADD_PROJECT,
        payload: {
            id: ID(),
            name: project.name, 
            description: project.description,
            category: project.category,
            step: 0
        }
    }
} 

export const editProject = (id, name, desc) => {
    return {
        type: Type.EDIT_PROJECT, 
        payload: {id: id, newName: name, newDesc: desc}
    }
}

export const deleteProject = (id) => {
    return {
        type: Type.DELETE_PROJECT, 
        payload: id
    }
}

// Generates IDs
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  