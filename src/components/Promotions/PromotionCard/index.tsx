import React from 'react';
import {PromotionCardProps} from "./types";
import {PromotionCardStyles} from "./styles";
import CustomLink from '../../common/CustomLink';
import StyledText from "../../common/StyledText";

const PromotionCard = ({content}: PromotionCardProps) => {
    const {image, title, link} = content

    return (
        <PromotionCardStyles>
            <div className="card-image">
                <img src={image.url} alt={image.alt}/>
            </div>
            <h4>
                <StyledText content={title}/>
            </h4>
            <CustomLink to={link.to} label={link.name}/>
        </PromotionCardStyles>
    );
};

export default PromotionCard;