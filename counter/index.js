import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

/*******也可以采用这样的方式来创建store */
// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './reducers/index'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'

// let createStoreWithMiddleware = applyMiddleware(
//     thunk,
//     logger
// )(createStore)

const store = configureStore();
render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)