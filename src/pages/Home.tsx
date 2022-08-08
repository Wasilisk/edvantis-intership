import React, {useEffect} from 'react';
import MainBanner from "../components/Banners/MainBanner";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getHomePageData} from "../store/slices/HomePage";
import Promotions from "../components/Sections/Promotions";
import SectionBanner from "../components/Banners/SectionBanner";
import GoodsSelection from "../components/Sections/GoodsSelection";
import ParallaxBanner from "../components/Banners/ParallaxBanner";
import {selectHomePage} from "../store/slices/HomePage/selectors";
import Offers from "../components/Sections/Offers";
import TabsSection from "../components/Sections/TabsSection";
import {selectFeedbacks} from "../store/slices/Feedbacks/selectors";
import {getFeedbacks} from "../store/slices/Feedbacks";
import FeedbackSection from "../components/Sections/FeedbackSection";

const Home = () => {
    const dispatch = useAppDispatch();
    const homepageData = useAppSelector(selectHomePage);
    const feedbacks = useAppSelector(selectFeedbacks);

    useEffect(() => {
        dispatch(getHomePageData());
        dispatch(getFeedbacks());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                !homepageData.isLoading && <>
                    {homepageData.main_banner && <MainBanner {...homepageData.main_banner}/>}
                    {homepageData.promotions && <Promotions promotions={homepageData.promotions}/>}
                    {homepageData.section_banner && <SectionBanner {...homepageData.section_banner}/>}
                    {homepageData.goods_selection && <GoodsSelection {...homepageData.goods_selection}/>}
                    {homepageData.parallax_banner && <ParallaxBanner {...homepageData.parallax_banner}/>}
                    {homepageData.offers && <Offers offers={homepageData.offers}/>}
                    {homepageData.tabs_section && <TabsSection {...homepageData.tabs_section}/>}
                    {feedbacks && <FeedbackSection feedbacks={feedbacks}/>}
                </>
            }
        </>
    );
};

export default Home;