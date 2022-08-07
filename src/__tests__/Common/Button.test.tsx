import {fireEvent, render} from "@testing-library/react";
import Button from "../../components/common/Button";

describe('Button component', () => {
    const onClick = jest.fn();
    it('should render outlined button', () => {
        const {asFragment} = render(<Button
            variant="outlined"
            size="small"
            label="Click me"
            onClick={onClick}
        />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render filled button with dark hover', () => {
        const {asFragment} = render(<Button
            variant="filled"
            size="small"
            label="Click me"
            onClick={onClick}
        />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render filled button with light hover', () => {
        const {asFragment} = render(<Button
            variant="filled"
            size="small"
            label="Click me"
            hoverVariant="light"
            onClick={onClick}
        />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render fullwidth button', () => {
        const {asFragment} = render(<Button
            variant="outlined"
            size="medium"
            label="Click me"
            fullWidth
            onClick={onClick}
        />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render button with arrow', () => {
        const {container, asFragment} = render(<Button
            variant="outlined"
            size="medium"
            label="Click me"
            fullWidth
            hasArrow
            onClick={onClick}
        />);

        const buttonArrow = container.querySelector('button');
        expect(buttonArrow).toBeDefined()
        expect(asFragment()).toMatchSnapshot();
    })
    it('should call the callback', () => {
        const {container, asFragment} = render(<Button
            variant="outlined"
            size="medium"
            label="Click me"
            fullWidth
            hasArrow
            onClick={onClick}
        />);

        const button = container.firstChild
        fireEvent.click(button!);
        expect(onClick).toHaveBeenCalled();
        expect(asFragment()).toMatchSnapshot();
    })
    it('should be disabled', () => {
        const {container, asFragment} = render(<Button
            variant="outlined"
            size="medium"
            label="Click me"
            fullWidth
            hasArrow
            onClick={onClick}
            disabled
        />);

        const button = container.firstChild
        fireEvent.click(button!);
        expect(onClick).not.toHaveBeenCalled();
        expect(asFragment()).toMatchSnapshot();
    })
})