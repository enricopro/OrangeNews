import React from 'react';
import MainApplication from './mainapplication'
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducer);


export default function App() {

  return (
        <Provider store={store}>
            <MainApplication />
        </Provider>
  );
}
