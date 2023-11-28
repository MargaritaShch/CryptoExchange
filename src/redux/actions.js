import {ADD_COINS} from './types';

export function addCoins(newCoins){
    return {
        type: ADD_COINS,
        payload: newCoins
    }
}