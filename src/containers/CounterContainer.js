import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor, getRandomRadius } from '../utils';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    color: state.styleData.get('color'),
    radius: state.styleData.get('radius'),
    number: state.numberData.get('number')
});


/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onChangeStyle: () => {
        const color = getRandomColor();
        const radius = getRandomRadius();
        dispatch(actions.setStyle(color, radius));
    }
});

// Counter 컴포넌트의 Container 컴포넌트
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
