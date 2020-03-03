import { combineReducers } from 'redux'
import user from './user.js'
import data from './data.js'

export default combineReducers({
    user,
    data
})