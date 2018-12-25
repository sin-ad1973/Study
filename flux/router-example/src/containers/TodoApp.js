import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask } from '../actions/tasks';
// push は ActionCreator
import { push } from 'react-router-redux';

// Container ComponentはReact - Redux の橋渡しのみを行う。
// ここではJSXを記述するべきではない。

function mapStateToProps({ tasks }) {
    return {
        task: tasks.task,
        tasks: tasks.tasks,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTask(task) {
            dispatch(addTask(task));
        },
        inputTask(task) {
            dispatch(inputTask(task));
        },
        redirectToError() {
            dispatch(push('/error'));
        }
    }
}

// component/TodoAppへの紐つけを行う
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
