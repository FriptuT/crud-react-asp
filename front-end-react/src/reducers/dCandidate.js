import {ACTION_TYPES} from '../actions/dCandidate';

const initialState = {
    list:[]
}


export const dCandidate = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list:[...action.payload]
            }
    
        default:
            return state;
    }
}