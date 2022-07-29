import React from 'react';
import {MainBannerStyles} from './styles';
import LinkButton from "../../common/LinkButton";
import StyledText from "../../common/StyledText";
import {BannerType} from "../../../models";

const MainBanner = ({title, description, link, image}: BannerType) => {
    return (
        <MainBannerStyles backgroundImage={image?.url}>
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
            <div className="banner-image" data-testid="banner"/>
        </MainBannerStyles>
    );
};

export default MainBanner;
