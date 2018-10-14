import { combineReducers } from 'redux'
import auth from './auth'
import favs from './favs'
import diets from './diets'
import types from './types'

export default combineReducers({
    auth,
    favs,
    diets,
    types
})