import {ADD_COINS} from './types';

const initialState ={
    cryptoData: [] ,
    loadedCoins: 0 
}

export const reducerCoins =(state = initialState, action)=>{
    switch(action.type){
        case ADD_COINS:
            return {
                ...state,
                cryptoData: [...state.cryptoData, ...action.payload],
                loadedCoins: state.loadedCoins + action.payload.length,
            }
            default:
                return state
    }
}

