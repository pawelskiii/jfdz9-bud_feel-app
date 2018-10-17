const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAVS/SET_FAVS':
            return {
                data: action.favs
            };
        default:
            return state
    }
};

export default reducer