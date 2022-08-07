import React from 'react';
import {TextareaStyles} from "./styles";

const Textarea = (props: React.TextareaHTMLAttributes<HTMLInputElement>) => <TextareaStyles {...props}/>;

export default Textarea;