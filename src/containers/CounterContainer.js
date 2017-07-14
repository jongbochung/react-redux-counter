import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor, getRandomRadius } from '../utils';

const mapStateToProps = (state) => ({
    color: state.styleData.get('color'),
    radius: state.styleData.get('radius'),
    number: state.numberData.get('number')
});


const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onChangeStyle: () => {
        const color = getRandomColor();
        const radius = getRandomRadius();
        dispatch(actions.setStyle(color, radius));
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
