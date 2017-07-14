import * as types from '../actions/ActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  color: 'black',
  radius: 100
});

const color = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_STYLE:
            var newState =  state.set('color', action.color)
                                 .set('radius', action.radius);
            return newState;
        default:
            return state;
    }
}

export default color;
