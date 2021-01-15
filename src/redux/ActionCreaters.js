import * as ActionTypes from './ActionTypes';
import {baseUrl,newsAPIbaseUrl} from '../shared/baseUrl';
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

export const newsLoading=()=>({
    type:ActionTypes.NEWS_LOADING
});

export const newsFailed=(errmess)=>({
    type:ActionTypes.NEWS_FAILED,
    payload:errmess
});

export const addNews=(news)=>({
    type:ActionTypes.ADD_NEWS,
    payload:news

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
        dispatch(testsLoading(false))
        const errmess='Error: '+ error.message;
        return dispatch(testsFailed(errmess));
    })
}

export const fetchNews=()=>(dispatch)=>{
    dispatch(newsLoading(true));
    return axios.get(newsAPIbaseUrl)
    .then(res=>dispatch(addNews(res.data)))
    .catch(function(error){
        dispatch(newsLoading(false))
        const errmess='Error: '+ error.message;
        return dispatch(newsFailed(errmess));
    })
}