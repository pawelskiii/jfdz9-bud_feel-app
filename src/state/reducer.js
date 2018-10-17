import { combineReducers } from 'redux'
import auth from './auth'
import diets from './diets'
import types from './types'
import favs from './favs'

export default combineReducers({
    auth,
    diets,
    types,
    favs
})