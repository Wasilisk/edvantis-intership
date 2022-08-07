import React from 'react';
import { FeedbackCardStyles } from './styles';
import {FeedbackType} from "../../../models";
import StarRating from "../../common/StarRating";
import {parseDate} from "../../../utils/parseDate";

const FeedbackCard = ({firstname, surname, department, rating, comment, created_at}: FeedbackType) => {
    return (
        <FeedbackCardStyles data-testid="feedback-card">
            <p className="username">{firstname} {surname}</p>
            <p className="department">About {department}</p>
            <div className="rating">
                <StarRating activeStar={rating} precision={0.5} readonly/>
                <span>{rating * 2}/10</span>
            </div>
            <p className="comment">{comment}</p>
            <p>{parseDate(created_at)}</p>
        </FeedbackCardStyles>
    );
};

export default FeedbackCard;