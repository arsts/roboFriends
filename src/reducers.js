import { CHANGE_SEARCH_FIELD } from './constants.js'

// Make a start point
const initalState = {
    searchField: ''
}

// Create a reducer that is a pure function.
export const searchRobots = (state=initalState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state,  {searchField: action.payload});
        default:
            return state;
    }
}