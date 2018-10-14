const initialState = null;

const UPDATE_LIST = 'usersList/UPDATE_LIST';

export const updateList = list => ({
    type: UPDATE_LIST,
    list
});

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_LIST:
            return action.list;
        default:
            return state
    }
}