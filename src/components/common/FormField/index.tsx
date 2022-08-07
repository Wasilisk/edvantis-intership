import React from 'react';
import {FormFieldStyles} from './styles';
import {FormFieldProps} from "./types";

const FormField = ({label, children, errors, isRequired}: FormFieldProps) => {
    return (
        <FormFieldStyles>
            <div className="label">
                <span className="label-text">{label}</span>
                {isRequired && <span className="label-required">*</span>}
            </div>
            {children}
            {errors && <p className="error">{errors}</p>}
        </FormFieldStyles>
    );
};

export default FormField;