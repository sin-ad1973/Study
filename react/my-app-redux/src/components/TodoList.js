import React from 'react';
import TodoItem from './TodoItem';
// import { useSelector } from 'react-redux';

// useSelectorを使う場合
// function TodoList() {
//     const tasks = useSelector((state) => 
//         state.tasks
//     );
//     const list = tasks.map((task) => {
//         return <TodoItem {...task} key={task.id} />
//     })
//     return (
//         <div>
//             <ul>{list}</ul>
//         </div>
//     );
// }

class TodoList extends React.Component {
    render() {
        const list = this.props.tasks.map((task => {
            return <TodoItem {...task} key={task.id} />;
        }))
        return (
            <div>
                <ul>{list}</ul>
            </div>
        );
    }
}

export default TodoList;
