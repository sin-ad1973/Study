// *** ActionCreator定義 *******************************
export const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task,
    }
});
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task,
    }
});
export function asyncAddTask(task) {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(addTask(task));
        }, 1000);
    }
}

const sleep1000ms = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};
export function asyncInputTask(task) {
    return (dispatch, getState) => {
        sleep1000ms().then(() => {
            dispatch(inputTask(task));
        });
    };
};
