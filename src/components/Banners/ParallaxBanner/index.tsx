import React from 'react';
import StyledText from "../../common/StyledText";
import LinkButton from "../../common/LinkButton";
import {ParallaxBannerStyles} from './styles';
import {BannerType} from "../../../models";

const ParallaxBanner = ({title, description, link, image}: BannerType) => {
    return (
        <ParallaxBannerStyles parallaxImage={image?.url}>
            <div className="banner-wrapper">
                <div className="banner-info">
                    <h1>
                        <StyledText {...title}/>
                    </h1>
                    <p>{description}</p>
                    <LinkButton
                        data-testid="link-button"
                        to={link?.to}
                        variant="filled"
                        size="large"
                        label={link?.name}
                        hasArrow
                        fullWidth={false}
                    />
                </div>
            </div>
            <div className="banner-image" data-testid="banner"/>
        </ParallaxBannerStyles>
    );
};

export default ParallaxBanner;