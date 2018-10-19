import { combineReducers } from 'redux'
import auth from './auth'
import diets from './diets'
import types from './types'
import form from './form'

export default combineReducers({
    auth,
    diets,
    types,
    form,
})