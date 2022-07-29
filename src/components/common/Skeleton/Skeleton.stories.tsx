import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {SkeletonProps} from "./types";
import Skeleton from "./index";

export default {
    title: 'Application/Skeleton',
    component: Skeleton,
    argTypes: {
        variant: {
            options: ['rounded', 'circle'],
            control: { type: 'radio' },
        },
        width: {
            control: 'text',
        },
        height: {
            control: 'text',
        },
    }
} as ComponentMeta<typeof Skeleton>;

const Template: Story<SkeletonProps> = (props) => {
    return <Skeleton {...props}/>;
};

export const SquareSkeleton = Template.bind({});
SquareSkeleton.args= {
    width: "100px",
    height: "100px"
};

export const RoundedSkeleton = Template.bind({});
RoundedSkeleton.args= {
    variant: "rounded",
    width: "100px",
    height: "100px"
};

export const CircleSkeleton = Template.bind({});
CircleSkeleton.args= {
    variant: "circle",
    width: "100px",
    height: "100px"
};
