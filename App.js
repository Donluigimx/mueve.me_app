import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { reducer as appReducer } from './src/reducers/reducer';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { getToken } from './src/reducers/modules/users';
import { Provider } from 'react-redux';
import HomeContainer from './src/containers/HomeContainer';

export default class App extends React.Component {
  render() {
    const axiosClient = axios.create({
      baseURL: 'http://api.mueve.me/api',
      responseType: 'json'
    })

    const store = createStore(
        appReducer,
        applyMiddleware(
            axiosMiddleware(axiosClient),
        )
    )

    store.dispatch(getToken());
    return (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
  }
}
