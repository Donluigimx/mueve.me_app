import { combineReducers } from 'redux';
import users from './modules/users';
import maps from './modules/maps';

export const reducer = combineReducers(
    {
        users,
        maps,
    }
)