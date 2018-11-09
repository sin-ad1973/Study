import React from 'react';

// Functional Component は純粋なReact Component

// *** View定義 ***************************************
export default function TodoApp({ task, tasks, inputTask, addTask, addTaskAndClear }) {
    return (
        <div>
            <input type="text" value={task} onChange={(e) => inputTask(e.target.value)} />
            <input type="button" value='add' onClick={() => addTaskAndClear(task)} />
            <ul>
                {
                    tasks.map(function(item, i) {
                        return (
                            <li key={i}>{item}</li>
                        );
                    })
                }
            </ul>
        </div>
    )
}
