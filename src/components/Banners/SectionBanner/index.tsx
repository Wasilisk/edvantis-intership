import React from 'react';
import {SectionBannerStyles} from './styles';
import {useAppSelector} from "../../../hooks";
import {selectSectionBanner} from "../../../store/slices/HomePage/selectors";

const SectionBanner = () => {
    const sectionBannerContent = useAppSelector(selectSectionBanner);

    return (
        sectionBannerContent && <SectionBannerStyles backgroundImage={sectionBannerContent.banner_texture.url}>
            <div className="banner-info">
                <h2>
                    {
                        sectionBannerContent.title.highlight &&
                        <span className="highlight">{sectionBannerContent.title.highlight}&nbsp;</span>
                    }
                    {sectionBannerContent.title.plain_text}
                </h2>
            </div>
        </SectionBannerStyles>
    );
};

export default SectionBanner;