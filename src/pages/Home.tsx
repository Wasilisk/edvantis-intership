import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import MainBanner from "../components/MainBanner";
import {useAppDispatch} from "../hooks";
import {getHomePageData} from "../store/slices/HomePage";
import Promotions from "../components/Promotions";

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
        </Layout>
    );
};

export default Home;