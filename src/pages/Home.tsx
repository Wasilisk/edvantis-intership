import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import MainBanner from "../components/Banners/MainBanner";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getHomePageData} from "../store/slices/HomePage";
import Promotions from "../components/Promotions";
import SectionBanner from "../components/Banners/SectionBanner";
import GoodsSelection from "../components/GoodsSelection";
import ParallaxBanner from "../components/Banners/ParallaxBanner";
import {selectHomePage} from "../store/slices/HomePage/selectors";

const Home = () => {
    const dispatch = useAppDispatch();
    const homepageData = useAppSelector(selectHomePage);

    useEffect(() => {
        dispatch(getHomePageData());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            {
                !homepageData.isLoading && <>
                    {homepageData.main_banner && <MainBanner {...homepageData.main_banner}/>}
                    {homepageData.promotions && <Promotions promotions={homepageData.promotions}/>}
                    {homepageData.section_banner && <SectionBanner {...homepageData.section_banner}/>}
                    {homepageData.goods_selection && <GoodsSelection {...homepageData.goods_selection}/>}
                    {homepageData.parallax_banner && <ParallaxBanner {...homepageData.parallax_banner}/>}
                </>
            }
        </Layout>
    );
};

export default Home;