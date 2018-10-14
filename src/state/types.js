const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TYPES/SET_TYPES':
            return {
                data: action.types
            };
        default:
            return state
    }
};

export default reducer