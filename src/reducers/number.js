import * as types from '../actions/ActionTypes';
import { Map } from 'immutable';

const initialState = Map({
    number: 0
})

const number = (state = initialState, action) => {

    switch(action.type) {
        case types.INCREMENT:
            return state.set('number', state.get('number')+1);
        case types.DECREMENT:
            return state.set('number', state.get('number')-1);
        default:
            return state;
    }
}

export default number;
