import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_STYLE = 'counter/SET_STYLE';

export const create = createAction(CREATE); // color, radius
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT); // index
export const decrement = createAction(DECREMENT); // index
export const setStyle = createAction(SET_STYLE); // { index, color, radius }

const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0,
            radius: 100
        })
    ])
})

export default handleActions({
    [CREATE]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.push(
            Map({
                color: action.payload.color,
                number: 0,
                radius: action.payload.radius
            })
        ))
    },

    [REMOVE]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.pop())
    },

    [INCREMENT]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload,
            (counter) => counter.set('number', counter.get('number') + 1))
        );
    },

    [DECREMENT]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload,
            (counter) => counter.set('number', counter.get('number') - 1))
        );
    },

    [SET_STYLE]: (state, action) => {
        const counters = state.get('counters');
        
        return state.set('counters', counters.update(
            action.payload.index,
            (counter) => counter.set('color', action.payload.color)
                                .set('radius', action.payload.radius)

          )
        );
    },
}, initialState);
