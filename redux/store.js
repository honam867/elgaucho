import { createStore, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import logger from "redux-logger";
import combineReducers from "./root-reducer";
const middleWares = [thunkMiddleware, logger];


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleWares))
    }
    return applyMiddleware(...middleWares)
}

const combinedReducer = combineReducers;
const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        console.log(state.cart)
        if (state.cart) nextState.cart = state.cart // preserve count value on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

const initStore = () => {
    return createStore(reducer, bindMiddleware(...middleWares))
}

export const wrapper = createWrapper(initStore)