import React from 'react';
import { OfferCardStyles } from './styles';
import LinkButton from "../../common/LinkButton";
import {OfferCardProps} from "./types";

const OfferCard = ({caption, title, description, image, link, variant}: OfferCardProps) => {
    return (
        <OfferCardStyles backgroundImage={image.url} variant={variant}>
            <div className="text-info">
                <h6 className="caption">{caption}</h6>
                <h4 className="title">{title}</h4>
                <p className="description">{description}</p>
            </div>
            <LinkButton
                variant="filled"
                size="small"
                hasArrow
                label={link.name}
                to={link.to}
                hoverVariant={variant === "dark" ? "dark" : "light"}
            />
        </OfferCardStyles>
    );
};

export default OfferCard;