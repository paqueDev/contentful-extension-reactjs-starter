import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import { initFieldValue } from '../actions';
import EditMessage from './EditMessage';

const App = ({ fieldValue, sdk, dispatch }) => {
    useEffect(() => {
        if (sdk.field.getValue() && sdk.field.getValue() !== {}) {
            dispatch(initFieldValue(sdk.field.getValue()));
        } else {
            setFieldValue();
        }

        sdk.window.startAutoResizer();

        return () => {
            // Anything in here is fired on component unmount.
            sdk.window.stopAutoResizer();
        };
    }, []);

    useEffect(() => {
        if (sdk.field.getValue() && !isEqual(fieldValue, sdk.field.getValue())) {
            setFieldValue();
        }
    }, [fieldValue]);

    const setFieldValue = () => sdk.field.setValue(fieldValue);

    return (
        <div>
            <h1>Hello</h1>
            {
                fieldValue && <p>{ fieldValue.message }</p>
            }
            <EditMessage/>
        </div>
    );
};

const mapStateToProps = ({ fieldValue }) => ({
    fieldValue: fieldValue,
});
export default connect(mapStateToProps)(App);
