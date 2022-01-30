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
