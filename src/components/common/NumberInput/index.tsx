import React, {useRef} from 'react';
import {NumberInputStyles} from "./styles";
import {ReactComponent as InputArrow} from "../../../assets/icons/input-arrow.svg";
import {NumberInputProps} from "./types";

const NumberInput = ({min, max, value, onChange}: NumberInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const incrementValue = () => {
        const newValue = Math.max(Number(min), Math.min(Number(max), Number(value + 1)));
        onChange(newValue);
    }
    const decrementValue = () => {
        const newValue = Math.max(Number(min), Math.min(Number(max), Number(value - 1)));
        onChange(newValue);
        };

    return (
        <NumberInputStyles>
            <input
                data-testid="input"
                type="number"
                min={min}
                max={max}
                value={value}
                ref={inputRef}
                onChange={()=>{}}
            />
            <div className="input-arrows">
                <InputArrow data-testid="plus" onClick={incrementValue}/>
                <InputArrow data-testid="minus" className="down-arrow" onClick={decrementValue}/>
            </div>
        </NumberInputStyles>
    );
};

export default NumberInput;
