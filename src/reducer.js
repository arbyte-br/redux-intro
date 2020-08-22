const initialState = {
    text: 'Bem vindo ao React'
};

const reducerFn = (state = initialState, action) => {
    if (action.type === 'CHANGE_WELLCOME_TEXT') {
        return {
            ...state,
            text: action.payload
        }
    }

    return state;
};

export default reducerFn;