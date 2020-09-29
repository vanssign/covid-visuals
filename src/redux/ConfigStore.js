import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Cases} from './cases';
import thunk from 'redux-thunk';


export const ConfigStore =()=>{
    const store = createStore(
        combineReducers({
            cases: Cases,
        }),
        applyMiddleware(thunk)
        );
        return store;
}