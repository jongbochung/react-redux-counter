
import * as types from './ActionTypes';

export const create = (color, radius) => ({
    type: types.CREATE,
    color,
    radius
});

export const remove = () => ({
    type: types.REMOVE
});

export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

export const setStyle = (index, color, radius) => ({
    type: types.SET_STYLE,
    index,
    color,
    radius
});
