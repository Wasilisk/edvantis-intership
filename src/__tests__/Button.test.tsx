import {render} from "@testing-library/react";
import Button from "../components/common/Button";

describe('Button component', () => {
    it('should render outlined button', () => {
        const {asFragment} = render(<Button variant="outlined" size="small" label="Click me"/>);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render filled button with dark hover', () => {
        const {asFragment} = render(<Button variant="filled" size="small" label="Click me"/>);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render filled button with light hover', () => {
        const {asFragment} = render(<Button variant="filled" size="small" label="Click me" hoverVariant="light"/>);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render fullwidth button', () => {
        const {asFragment} = render(<Button variant="outlined" size="medium" label="Click me" fullWidth/>);
        expect(asFragment()).toMatchSnapshot();
    })
})