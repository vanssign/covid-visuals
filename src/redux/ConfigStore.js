import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Cases} from './cases';
import {Tests} from './tests';
import thunk from 'redux-thunk';
import { News } from './news';


export const ConfigStore =()=>{
    const store = createStore(
        combineReducers({
            cases: Cases,
            tests:Tests,
            news:News
        }),
        applyMiddleware(thunk)
        );
        return store;
}