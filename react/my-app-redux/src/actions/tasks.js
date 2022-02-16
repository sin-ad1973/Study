export const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task,
    }
});

export const addTask = () => ({
    type: 'ADD_TASK',
});

export const resetTask = () => ({
    type: 'RESET_TASK',
});

// redux-thunkを使用した非同期アクションクリエータ
export const asyncMethod = () => {
    return (dispatch, getState) => {
        setTimeout(
            () => {
                console.log(getState());
                console.log('test');
                dispatch(addTask());
            },
            5000
        );
    }
};
