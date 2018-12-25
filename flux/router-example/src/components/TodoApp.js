import React from 'react';

// Functional Component は純粋なReact Component

// *** View定義 ***************************************
export default function TodoApp({ task, tasks, inputTask, addTask, redirectToError }) {
    return (
        <div>
            <input type="text" onChange={(e) => inputTask(e.target.value)} />
            <input type="button" value='add' onClick={() => addTask(task)} />
            <ul>
                {
                    tasks.map(function(item, i) {
                        return (
                            <li key={i}>{item}</li>
                        );
                    })
                }
            </ul>
            <button onClick={() => redirectToError()}>エラーページへ</button>
        </div>
    )
}
