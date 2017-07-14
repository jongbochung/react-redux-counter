import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import '../css/CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onChangeStyle}) => {
    const counterList = counters.map(
        (counter, i) => (
            <Counter
                key={i}
                index={i}
                {...counter.toJS()}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onChangeStyle={onChangeStyle}
            />
        )
    );

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.instanceOf(List),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onChangeStyle: PropTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onChangeStyle: () => console.warn('onChangeStyle not defined')
}

export default CounterList;
