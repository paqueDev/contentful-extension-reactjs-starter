const fieldValue = (state = [], action) => {
    switch (action.type) {
    case 'INIT_FIELD_VALUE' :
        return action.payload.value;

    case 'UPDATE_MESSAGE' :
        return {
            ...state,
            message: action.payload.value
        };

    default:
        return state;
    }
};

export default fieldValue;
