import React from 'react';
import {SelectStyles} from "./styles";
import {SelectProps} from './types';

const Select = ({options, hasNoneValue, ...props}: SelectProps) => {
    return (
        <SelectStyles {...props}>
            {hasNoneValue && <option value="">None</option>}
            {
                options
                    ? options.map((option, index) => <option
                            key={index}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    )
                    : <option value="">No data</option>
            }
        </SelectStyles>
    );
};

export default Select;