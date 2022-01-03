import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './styled';
import { updateMessage } from '../../actions/index';

const EditMessage = ({ dispatch, storedMessage }) => {
    return (
        <Container>
            <label>Update Message</label>
            <textarea type={'text'}
                defaultValue={storedMessage || ''}
                onChange={e => {
                    dispatch(updateMessage(e.target.value));
                }}/>
        </Container>
    );
};

EditMessage.propTypes = {
    storedMessage: PropTypes.string
};

const mapStateToProps = ({ fieldValue }) => ({
    storedMessage: fieldValue.message || null
});

export default connect(mapStateToProps)(EditMessage);
