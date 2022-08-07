import React, {forwardRef} from 'react';
import {OverlayingPopupProps} from "./types";
import Portal from "../../common/Portal";
import {OverlayingPopupStyles} from "./styles";

const OverlayingPopup = forwardRef<HTMLDivElement, OverlayingPopupProps>(({onClose, children}, ref) => {

    return (
        <Portal>
            <OverlayingPopupStyles
                ref={ref}
                aria-modal="true"
            >
                <div
                    data-testid="overlay"
                    className="overlay"
                    onClick={onClose}
                />
                {children}
            </OverlayingPopupStyles>
        </Portal>
    );
})

export default OverlayingPopup;