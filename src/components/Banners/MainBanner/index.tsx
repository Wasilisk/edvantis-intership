import React from 'react';
import {MainBannerStyles} from './styles';
import {useAppSelector} from "../../../hooks";
import {selectMainBanner} from "../../../store/slices/HomePage/selectors";
import LinkButton from "../../common/LinkButton";

const MainBanner = () => {
    const mainBannerData = useAppSelector(selectMainBanner);

    return (
        mainBannerData && <MainBannerStyles backgroundImage={mainBannerData.image.url}>
            <div className="banner-info">
                <h1>
                    <span className="highlight">{mainBannerData.title.highlight}&nbsp;</span>
                    {mainBannerData.title.plain_text}
                </h1>
                <p>{mainBannerData.description}</p>
                <LinkButton
                    data-testid="link-button"
                    to={mainBannerData.link.to}
                    variant="filled"
                    size="large"
                    label={mainBannerData.link.name}
                    hasArrow
                    fullWidth={false}
                />
            </div>
            <div className="banner-image" data-testid="banner"/>
        </MainBannerStyles>
    );
};

export default MainBanner;
