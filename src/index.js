import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

import { init } from 'contentful-ui-extensions-sdk';

import App from './App';

const initialState = {
    fieldValue: {
        message: ''
    }
};

const store = createStore(rootReducer, initialState, applyMiddleware(logger));

init(sdk => {
    ReactDOM.render(
        <Provider store={store}>
            <App sdk={sdk}/>
        </Provider>,
        document.getElementById('root')
    );
});
