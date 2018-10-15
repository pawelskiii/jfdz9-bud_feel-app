const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DIETS/SET_DIETS':
            return {
                data: action.diets
            };
        default:
            return state
    }
};

export default reducer