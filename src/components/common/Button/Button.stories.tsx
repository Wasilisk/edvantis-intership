import {ComponentMeta, Story} from '@storybook/react';
import Button from './index';
import {ButtonProps} from "./types";


export default {
    title: 'Buttons/CommonButton',
    component: Button,
    argTypes: {
        variant: {
            options: ['filled', 'outlined'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        hoverVariant: {
            options: ['dark', 'light'],
            control: { type: 'select' },
        },
        hasArrow: {
            control: "boolean"
        },
        fullWidth: {
            control: "boolean"
        }
    }
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (props) => {
    return <Button {...props}/>;
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args= {
    variant: "outlined",
    label: "Outlined",
    size: "medium",
    fullWidth: false
};

export const FilledButton = Template.bind({});
FilledButton.args= {
    variant: "filled",
    label: "Filled",
    size: "medium",
    hoverVariant: "dark",
    fullWidth: false
};

export const ButtonWithArrow = Template.bind({});
ButtonWithArrow.args= {
    variant: "filled",
    label: "Filled",
    size: "medium",
    hoverVariant: "dark",
    fullWidth: false,
    hasArrow: true
};
