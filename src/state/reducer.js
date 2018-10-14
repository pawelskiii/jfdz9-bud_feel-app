import { combineReducers } from 'redux'
import auth from './auth'
import favs from './favs'
import userList from './userList'

export default combineReducers({
    userList,
    auth,
    favs
})