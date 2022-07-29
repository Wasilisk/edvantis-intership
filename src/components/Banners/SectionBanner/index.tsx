import React from 'react';
import {SectionBannerStyles} from './styles';
import StyledText from "../../common/StyledText";
import {SectionBannerType} from "../../../models";

const SectionBanner = ({banner_texture, title}: SectionBannerType) => {
    return (
        <SectionBannerStyles backgroundImage={banner_texture?.url}>
            <div className="banner-info">
                <h2>
                    <StyledText {...title}/>
                </h2>
            </div>
        </SectionBannerStyles>
    );
};

export default SectionBanner;