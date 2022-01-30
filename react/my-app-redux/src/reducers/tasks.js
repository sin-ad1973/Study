const initialState = {
    task: '',
    tasks: [],
    unigueId: 0,
};

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task,
            };
        case 'ADD_TASK': 
            return {
                ...state, 
                tasks: state.tasks.concat([{
                    title: action.payload.task,
                    id: state.unigueId,
                }]),
                unigueId: state.unigueId + 1,
            };
        default: 
            return state;
    }
}