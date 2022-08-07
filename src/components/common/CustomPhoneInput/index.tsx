import React from 'react';
import {PhoneInputStyles} from "./styles";
import {PhoneInputProps} from "react-phone-input-2";

const CustomPhoneInput = (props: PhoneInputProps) => <PhoneInputStyles {...props}/>;

export default CustomPhoneInput;