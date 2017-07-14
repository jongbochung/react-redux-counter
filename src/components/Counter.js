import React from 'react';
import PropTypes from 'prop-types';
import '../css/Counter.css';

const Counter = ({number, color, radius, index, onIncrement, onDecrement, onChangeStyle}) => {
    return (
        <div
            className="Counter"
            onClick={() => onIncrement(index)}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement(index);
                }
            }
            onDoubleClick={() => onChangeStyle(index)}
            style={{backgroundColor: color, borderRadius: radius}}>
                {number}
        </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    radius: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onChangeStyle: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    radius: '100',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onChangeStyle: () => console.warn('onChangeStyle not defined')
};

export default Counter;
