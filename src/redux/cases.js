import * as Actiontypes from './ActionTypes';

export const Cases=(state={
        isLoading:true,
        errMess:null,
        cases:[]
    }, action)=>{
    switch(action.type){
        case Actiontypes.ADD_CASES:
            return{...state,isLoading:false,errMess:null,cases:action.payload};

        case Actiontypes.CASES_LOADING:
            return{...state,isLoading:true,errMess:null,cases:[]};

        case Actiontypes.CASES_FAILED:
            return{...state,isLoading:false,errMess: action.payload,cases:[]};
            
        default:
            return state;
    
}}