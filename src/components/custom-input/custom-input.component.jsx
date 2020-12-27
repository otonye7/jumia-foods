import React from 'react';
import { CustomInputContainer } from './custom-input.styles';
import PropTypes from 'prop-types';

const CustomInput = (props) => {
    const {label, required, error_message, rows} = props;
    return (
        <CustomInputContainer>
            <label>Email</label>
            <textarea></textarea>
        </CustomInputContainer>
    )
};


export default CustomInput;