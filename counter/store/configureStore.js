import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import logger from 'redux-logger'

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    // if(module.hot) {
    //     module.hot.accept('../reducers', () => {
    //         const nextReducer = require('../reducers')
    //         store.replaceReducer(nextReducer)
    //     })
    // }
    return store
}