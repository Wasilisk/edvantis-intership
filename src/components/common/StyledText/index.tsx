import React from 'react';
import {StyledTextType} from "../../../models/common";

const StyledText = ({before_highlight, highlight, after_highlight}: StyledTextType) => {
    return (
        <>
            {before_highlight && <>{before_highlight} </>}
            {
                highlight &&
                <span className="highlight">{highlight} </span>
            }
            {after_highlight && after_highlight}
        </>
    );
};

export default StyledText;