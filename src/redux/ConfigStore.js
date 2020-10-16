import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Cases} from './cases';
import {Tests} from './tests';
import thunk from 'redux-thunk';


export const ConfigStore =()=>{
    const store = createStore(
        combineReducers({
            cases: Cases,
            tests:Tests
        }),
        applyMiddleware(thunk)
        );
        return store;
}