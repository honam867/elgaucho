import { createStore, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import logger from "redux-logger";
import combineReducers from "./root-reducer";
const middleWares = [thunkMiddleware];


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const middleWaresInDevelop = [thunkMiddleware, logger];
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleWaresInDevelop))
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
        if (state.cart) nextState.cart = state.cart // preserve count value on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

const makeStore = ({ isServer }) => {
    if (isServer) {
        //If it's on server side, create a store
        console.log('If its on server side, create a store');
        return createStore(reducer, bindMiddleware(...middleWares))
    } else {
        //If it's on client side, create a store which will persist
        console.log('If its on client side, create a store');
        const { persistStore, persistReducer } = require("redux-persist");
        const storage = require("redux-persist/lib/storage").default;

        const persistConfig = {
            key: "nextjs",
            whitelist: ["cart"], // only counter will be persisted, add other reducers if needed
            storage, // if needed, use a safer storage
        };

        const persistedReducer = persistReducer(persistConfig, reducer); // Create a new reducer with our existing reducer

        const store = createStore(
            persistedReducer,
            bindMiddleware(...middleWares)
        ); // Creating the store again

        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
};

export const wrapper = createWrapper(makeStore)