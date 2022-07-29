import React from 'react';
import {StyledTextProps} from "./types";

const StyledText = ({content}: StyledTextProps) => {
    return (
        <>
            {content.before_highlight && <>{content.before_highlight}&nbsp;</>}
            {
                content.highlight &&
                <span className="highlight">{content.highlight}&nbsp;</span>
            }
            {content.after_highlight && content.after_highlight}
        </>
    );
};

export default StyledText;