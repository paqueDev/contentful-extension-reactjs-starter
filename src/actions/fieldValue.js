export const initFieldValue = object => ({
    type: 'INIT_FIELD_VALUE',
    payload: {
        value: object
    }
});

export const updateMessage = value => ({
    type: 'UPDATE_MESSAGE',
    payload: {
        value: value
    }
});
