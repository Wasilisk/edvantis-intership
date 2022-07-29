import React from 'react';
import {PromotionCardStyles} from "./styles";
import CustomLink from '../../common/CustomLink';
import StyledText from "../../common/StyledText";
import {PromotionType} from "../../../models";

const PromotionCard = ({image, title, link}: PromotionType) => {
    return (
        <PromotionCardStyles>
            <div className="card-image">
                <img src={image?.url} alt={image.alt}/>
            </div>
            <h4>
                <StyledText {...title}/>
            </h4>
            <CustomLink to={link?.to} label={link?.name}/>
        </PromotionCardStyles>
    );
};

export default PromotionCard;