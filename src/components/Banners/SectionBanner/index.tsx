import React from 'react';
import {SectionBannerStyles} from './styles';
import {useAppSelector} from "../../../hooks";
import {selectSectionBanner} from "../../../store/slices/HomePage/selectors";
import StyledText from "../../common/StyledText";

const SectionBanner = () => {
    const sectionBannerContent = useAppSelector(selectSectionBanner);

    return (
        sectionBannerContent && <SectionBannerStyles backgroundImage={sectionBannerContent.banner_texture.url}>
            <div className="banner-info">
                <h2>
                    <StyledText content={sectionBannerContent.title}/>
                </h2>
            </div>
        </SectionBannerStyles>
    );
};

export default SectionBanner;