import reducer from './tasks';

describe('tesks Reducer', () => {
    test('初期値', () => {
        const state = undefined;
        const action = {};
        const result = reducer(state, action);
        const expected = {
            task: '',
            tasks: [],
        };

        expect(result).toEqual(expected);
    });

    test('ADD_TASKアクション', () => {
        const state = {
            task: '',
            tasks: ['Reduxを学ぶ'],
        };
        const action = {
            type: 'ADD_TASK',
            payload: {
                task: 'Testを学ぶ',
            },
        };
        const result = reducer(state, action);
        const expected = {
            task: '',
            tasks: ['Reduxを学ぶ', 'Testを学ぶ'],
        };

        expect(result).toEqual(expected);
    })
});