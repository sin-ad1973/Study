import { connect } from 'react-redux';
import App from '../components/App';
import { inputTask, addTask, resetTask } from '../actions/tasks';

function mapStateToProps({ task, tasks }) {
    return {
        task,
        tasks,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputTask(task) {
            dispatch(inputTask(task));
        },
        addTask() {
            dispatch(addTask());
        },
        resetTask() {
            dispatch(resetTask());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
