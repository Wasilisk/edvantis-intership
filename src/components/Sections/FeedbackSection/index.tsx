import React from 'react';
import { FeedbackSectionStyles } from './styles';
import {FeedbackSectionProps} from "./types";
import FeedbackCard from "../../Cards/FeedbackCard";

const FeedbackSection = ({feedbacks}: FeedbackSectionProps) => {
    return (
        <FeedbackSectionStyles>
            <div className="wrapper">
                <h4 className="title">What Our Customers Say</h4>
                <p className="description">We love your feedback on our products!</p>
                <div className="feedback-cards">
                    {
                        feedbacks.slice(0, 3).map(feedback => <FeedbackCard key={feedback.id} {...feedback}/>)
                    }
                </div>
            </div>
        </FeedbackSectionStyles>
    );
};

export default FeedbackSection;