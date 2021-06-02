import ReactDOM from 'react-dom'
import React from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import App from './Components/App'
import useTheme from './styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import store from './store';

const redux_store = createStore(rootReducer, store, composeWithDevTools())

ReactDOM.render(
    <Provider store={redux_store}>
        <ThemeProvider theme={useTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>
    , document.getElementById("root")
);