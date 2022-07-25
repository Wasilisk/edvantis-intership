import React from 'react';
import {ComponentMeta, ComponentStory, Story} from '@storybook/react';
import Header from './index';
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {AppLayoutState} from "../../store/slices/AppLayout/types";

export const MockedState: AppLayoutState = {
    header:  {
            logo: {
                url: "https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e33277186cda400222c9970_optimized_259?nowebp"
            },
            navigation: [
                {
                    name: "Promotions",
                    to: "#link"
                },
                {
                    name: "Best-selling",
                    to: "#link"
                },
                {
                    name: "Collection",
                    to: "#link"
                },
                {
                    name: "Testimonials",
                    to: "#link"
                },
                {
                    name: "Blog",
                    to: "#link"
                },
                {
                    name: "Contact us",
                    to: "#link"
                }
            ],
        },
    footer: null,
    isLoading: false
};

const Mockstore = ({ layout, children }: any) => (
    <Provider
        store={configureStore({
            reducer: {
                app_layout: createSlice({
                    name: 'app_layout',
                    initialState: layout,
                    reducers: {},
                }).reducer,
            },
        })}
    >
        {children}
    </Provider>
);

export default {
    title: 'Header',
    component: Header,
    excludeStories: /.*MockedState$/,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
Default.decorators = [
    (Story: Story) => {
        return (
            <Mockstore
                layout={MockedState}
            >
                <Story/>
            </Mockstore>
        );
    },
];

export const Loading = Template.bind({});
Loading.decorators = [
    (Story: Story) => {
        return (
            <Mockstore
                layout={{
                    ...MockedState,
                    isLoading: true
                }}
            >
                <Story/>
            </Mockstore>
        );
    },
];
