import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';
import axios from 'axios'

export const casesLoading=()=>({
    type:ActionTypes.CASES_LOADING
});

export const casesFailed=(errmess)=>({
    type:ActionTypes.CASES_FAILED,
    payload:errmess
});

export const addCases=(cases)=>({
    type:ActionTypes.ADD_CASES,
    payload:cases

});

export const testsLoading=()=>({
    type:ActionTypes.TESTS_LOADING
});

export const testsFailed=(errmess)=>({
    type:ActionTypes.TESTS_FAILED,
    payload:errmess
});

export const addTests=(tests)=>({
    type:ActionTypes.ADD_TESTS,
    payload:tests

});

export const fetchCases=()=>(dispatch)=>{
    dispatch(casesLoading(true));
    return axios.get(baseUrl+'history/data')
    .then(res=>dispatch(addCases(res.data)))
    .catch(function(error){
        dispatch(casesLoading(false))
        const errmess='Error: '+ error.message;
        return dispatch(casesFailed(errmess));

    })
}

export const fetchTests=()=>(dispatch)=>{
    dispatch(testsLoading(true));
    return axios.get(baseUrl+'testing/history/data')
    .then(res=>dispatch(addTests(res.data)))
    .catch(function(error){
        dispatch(casesLoading(false))
        const errmess='Error: '+ error.message;
        return dispatch(testsFailed(errmess));

    })
}