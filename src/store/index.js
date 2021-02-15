// Creating the store 
// and adding reducers to it
import data from './data.js'
import card from "./cart";
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// add as many reducers as you want
let reducers = combineReducers({ data, card });

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();