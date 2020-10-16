import * as Actiontypes from './ActionTypes';

export const Tests=(state={
        isLoading:true,
        errMess:null,
        tests:[]
    }, action)=>{
    switch(action.type){
        case Actiontypes.ADD_TESTS:
            return{...state,isLoading:false,errMess:null,tests:action.payload};

        case Actiontypes.TESTS_LOADING:
            return{...state,isLoading:true,errMess:null,tests:[]};

        case Actiontypes.TESTS_FAILED:
            return{...state,isLoading:false,errMess: action.payload,tests:[]};
            
        default:
            return state;
    
}}