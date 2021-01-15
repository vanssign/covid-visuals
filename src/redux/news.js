import * as Actiontypes from './ActionTypes';

export const News=(state={
        isLoading:true,
        errMess:null,
        news:[]
    }, action)=>{
    switch(action.type){
        case Actiontypes.ADD_NEWS:
            return{...state,isLoading:false,errMess:null,news:action.payload};

        case Actiontypes.NEWS_LOADING:
            return{...state,isLoading:true,errMess:null,news:[]};

        case Actiontypes.NEWS_FAILED:
            return{...state,isLoading:false,errMess: action.payload,news:[]};
            
        default:
            return state;
    
}}