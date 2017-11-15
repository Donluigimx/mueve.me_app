import { createReducer } from '../utils';
import { AsyncStorage } from 'react-native';

export const authUser = (username, password) => ({
    type: 'AUTH_USER',
    payload: {
        request: {
            method: 'POST',
            url: '/Profiles/login',
            data: {
                username, password
            }
        }
    }
});

export const getToken = () => {
    let token = null;
    AsyncStorage.getItem('@MueveMe:authToken')
        .then( value => {
            token = value;
        });
    
    return {
        type: 'SET_TOKEN',
        token,
    }
}

export default createReducer(
    {
        isAuthed: false,
        token: null,
        userId: null
    },
    {
        AUTH_USER_SUCCESS: (state, action) => {
            AsyncStorage.setItem('@MueveMe:authToken', action.payload.data.id)
                .then(val => {})
            return {
                ...state,
                isAuthed: true,
                token: action.payload.data.id,
                userId: action.payload.data.userId
            }
        },

        SET_TOKEN: (state, { token }) => ({
            ...state,
            token
        })
    }
);