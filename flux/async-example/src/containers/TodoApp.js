import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask, asyncAddTask, asyncInputTask } from '../actions/tasks';

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
        addTask(task) {
            dispatch(addTask(task));
        },
        inputTask(task) {
            dispatch(inputTask(task));
        },
        asyncAddTask(task) {
            dispatch(asyncAddTask(task));
        },
        asyncInputTask(task) {
            dispatch(asyncInputTask(task));
        }
    }
}

// component/TodoAppへの紐つけを行う
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
