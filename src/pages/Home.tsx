import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import MainBanner from "../components/Banners/MainBanner";
import {useAppDispatch} from "../hooks";
import {getHomePageData} from "../store/slices/HomePage";
import Promotions from "../components/Promotions";
import SectionBanner from "../components/Banners/SectionBanner";
import GoodsSelection from "../components/GoodsSelection";

const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getHomePageData());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <MainBanner/>
            <Promotions/>
            <SectionBanner/>
            <GoodsSelection/>
        </Layout>
    );
};

export default Home;