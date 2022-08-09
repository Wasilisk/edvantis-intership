import React, {useState} from 'react';
import Button from "../../common/Button";
import {FeedbackStyles} from './styles';
import {useDisableBodyScroll} from "../../../hooks";
import MainPopup from "../../Popups/MainPopup";
import FeedbackForm from "../../FeedbackForm";

const Feedback = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const openModal = () => setIsPopupOpen(true);
    const closeModal = () => setIsPopupOpen(false);

    useDisableBodyScroll(isPopupOpen);

    return (
        <FeedbackStyles>
            <p>Leave your feedback about us</p>
            <Button
                data-testid="feedback-button"
                variant="filled"
                size="large"
                label="Feedback"
                onClick={openModal}
                hoverVariant="light"
                fullWidth
            />
            <MainPopup title="Leave your feedback" isOpen={isPopupOpen} onClose={closeModal}>
                <FeedbackForm onClose={closeModal}/>
            </MainPopup>
        </FeedbackStyles>
    );
};

export default Feedback;