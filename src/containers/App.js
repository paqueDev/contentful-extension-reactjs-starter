import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import { initFieldValue } from '../actions';
import EditMessage from './EditMessage';

const App = ({ fieldValue, extension, dispatch }) => {
    useEffect(() => {
        if (extension.field.getValue() && extension.field.getValue() !== {}) {
            dispatch(initFieldValue(extension.field.getValue()));
        } else {
            setFieldValue();
        }

        extension.window.startAutoResizer();

        return () => {
            // Anything in here is fired on component unmount.
            extension.window.stopAutoResizer();
        };
    }, []);

    useEffect(() => {
        if (extension.field.getValue() && !isEqual(fieldValue, extension.field.getValue())) {
            setFieldValue();
        }
    }, [fieldValue]);

    const setFieldValue = () => extension.field.setValue(fieldValue);

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
