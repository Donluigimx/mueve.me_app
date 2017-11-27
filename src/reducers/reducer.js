import { combineReducers } from 'redux'
import users from './modules/users'
import maps from './modules/maps'
import track from './modules/track'

export const reducer = combineReducers(
    {
        users,
        maps,
        track
    }
)
