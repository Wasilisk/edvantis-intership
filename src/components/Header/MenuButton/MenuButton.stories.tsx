import {ComponentMeta, Story} from '@storybook/react';
import {useArgs} from "@storybook/client-api";
import MenuButton from "./index";
import {MenuButtonProps} from "./types";

export default {
    title: 'Buttons/MenuButton',
    component: MenuButton,
    argTypes: {
        isOpen: {
            control: 'boolean',
        },
        setIsOpen: {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof MenuButton>;

const Template: Story<MenuButtonProps> = (props) => {
    const [{isOpen = props.isOpen}, updateArgs] = useArgs();
    const setIsOpen = () => updateArgs({isOpen: !isOpen});

    return <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
};

export const Default = Template.bind({});
Default.args = {
    isOpen: false,
};
