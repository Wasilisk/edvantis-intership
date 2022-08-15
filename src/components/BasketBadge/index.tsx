import React, {useRef, useState} from 'react';
import {BasketBadgeStyles} from './styles';
import {ReactComponent as BasketIcon} from "../../assets/icons/basket.svg"
import {BasketBadgeProps} from "./types";
import MainPopup from "../Popups/MainPopup";
import {useDisableBodyScroll} from "../../hooks";
import ShoppingCart from "../ShoppingCart";
import {CSSTransition} from "react-transition-group";

const BasketBadge = ({count}: BasketBadgeProps) => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    const openModal = () => setIsPopupOpen(true);
    const closeModal = () => setIsPopupOpen(false);

    useDisableBodyScroll(isPopupOpen);

    return (
        <>
            <CSSTransition
                in={Boolean(count)}
                timeout={500}
                classNames="basket"
                unmountOnExit
                nodeRef={nodeRef}
            >
            <BasketBadgeStyles>
                <BasketIcon onClick={openModal} data-testid="basket-icon"/>
                <div className="counter" data-testid="counter">
                    {count}
                </div>
            </BasketBadgeStyles>
            </CSSTransition>
            <MainPopup title="Shopping cart" isOpen={isPopupOpen} onClose={closeModal}>
                <ShoppingCart closeModal={closeModal}/>
            </MainPopup>
        </>
    );
};

export default BasketBadge;