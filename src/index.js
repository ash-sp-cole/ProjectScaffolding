import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from "./Redux/Reducers";

const store = createStore(reducer,
    applyMiddleware(reduxThunk)
        );


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,

  document.getElementById('root')
);

