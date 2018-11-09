import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask, addTaskAndClear } from '../actions/tasks';

// Container ComponentはReact - Redux の橋渡しのみを行う。
// ここではJSXを記述するべきではない。

function mapStateToProps({ task, tasks }) {
    return {
        task,
        tasks,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputTask(task) {
            dispatch(inputTask(task));
        },
        addTask(task) {
            dispatch(addTask(task));
        },
        addTaskAndClear(task) {
            dispatch(addTaskAndClear(task));
        }
    }
}

// component/TodoAppへの紐つけを行う
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
