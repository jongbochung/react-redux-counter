import number from './number';
import style from './style';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    numberData: number,
    styleData: style
});

export default reducers;
