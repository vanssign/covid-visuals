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

//This is thunk

export const fetchCases=()=>(dispatch)=>{
    dispatch(casesLoading(true));
    return axios.get(baseUrl+'data')
    .then(res=>dispatch(addCases(res.data)))
    .catch(function(error){
        dispatch(casesLoading(false))
        const errmess='Error: '+ error.message;
        return dispatch(casesFailed(errmess));

    })
}