 import { CHANGE_SEARCH_FIELD } from './constants.js'
 
 export const setSearchfield = (text) => ({
     type: CHANGE_SEARCH_FIELD,
     payload: text
 })

//  This action is going to take "text"
// and return an object with type and payload
// (means sending whatever data needed)