import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor, getRandomRadius } from '../utils';

const mapStateToProps = (state) => ({
    counters: state.get('counters')
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onChangeStyle: (index) => {
        const color = getRandomColor();
        const radius = getRandomRadius();
        dispatch(actions.setStyle( index, color, radius));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList);
