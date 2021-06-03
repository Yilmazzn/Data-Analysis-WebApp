import ReactDOM from 'react-dom'
import React from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import App from './Components/App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import theme from './theme';

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>
    , document.getElementById("root")
);