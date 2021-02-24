// Creating the store 
// and adding reducers to it
import data from './reducres'
import card from "./cart";
import { createStore, combineReducers ,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// add as many reducers as you want
let reducers = combineReducers({ data, card });

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();