import React from 'react';
import OverlayingPopup from "../OverlayingPopup";
import {CSSTransition} from "react-transition-group";
import {MainPopupProps} from "./types";
import {MainPopupStyles} from './styles';
import {ReactComponent as CloseIcon} from "../../../assets/icons/close.svg";

const MainPopup = ({title, isOpen, onClose, children}: MainPopupProps) => {
    const nodeRef = React.useRef<HTMLDivElement>(null)

    return (
            <CSSTransition
                in={isOpen}
                timeout={1000}
                classNames="modal"
                unmountOnExit
                nodeRef={nodeRef}
            >
                <OverlayingPopup onClose={onClose} ref={nodeRef}>
                    <MainPopupStyles>
                        <div className="popup-header">
                            <h4>{title}</h4>
                            <CloseIcon
                                data-testid="close-button"
                                onClick={onClose}
                            />
                        </div>
                        <div className="popup-content">
                            {children}
                        </div>
                    </MainPopupStyles>
                </OverlayingPopup>
            </CSSTransition>
    )
        ;
};

export default MainPopup;