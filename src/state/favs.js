const initialState = {
    data: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAVS/SET_FAVS':
            return {
                data: action.favs
            };
        case 'FAVS/RESET':
            return initialState;
        default:
            return state
    }
};

export default reducer