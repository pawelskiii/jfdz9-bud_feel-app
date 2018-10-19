const initialState = {};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORM/SET_FORM':
            return {
                data: action.form
            };
        default:
            return state
    }
};

export default reducer

