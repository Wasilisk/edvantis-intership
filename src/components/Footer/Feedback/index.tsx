import React from 'react';
import Button from "../../common/Button";
import { FeedbackStyles } from './styles';

const Feedback = () => {
    return (
        <FeedbackStyles>
            <p>Leave your feedback about us</p>
            <Button
                data-testid="feedback-button"
                variant="filled"
                size="large"
                label="Feedback"
                onClick={() => {}}
                hoverVariant="light"
                fullWidth
            />
        </FeedbackStyles>
    );
};

export default Feedback;