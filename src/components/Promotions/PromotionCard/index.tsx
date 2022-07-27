import React from 'react';
import {PromotionCardProps} from "./types";
import {PromotionCardStyles} from "./styles";
import CustomLink from '../../common/CustomLink';

const PromotionCard = ({content}: PromotionCardProps) => {
    const {image, title, link} = content

    return (
        <PromotionCardStyles>
            <div className="card-image">
                <img src={image.url} alt={image.alt}/>
            </div>
            <h4>
                {
                    title.highlight && <span className="highlight">{title.highlight}&nbsp;</span>
                }
                {title.plain_text}
            </h4>
            <CustomLink to={link.to} label={link.name}/>
        </PromotionCardStyles>
    );
};

export default PromotionCard;