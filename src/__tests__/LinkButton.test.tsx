import {fireEvent} from "@testing-library/react";
import LinkButton from "../components/common/LinkButton";
import {mockHistory} from "./__utils__/history-wrapper";
import { render } from "./__utils__/store-wrapper";

describe('LinkButton component', () => {
    it('should render outlined button', () => {
        const {asFragment} = render(<LinkButton
            variant="outlined"
            size="small"
            label="Click me"
            to="/link"

        />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render filled button with dark hover', () => {
        const {asFragment} = render(<LinkButton
            variant="filled"
            size="small"
            label="Click me"
            to="/link"
        />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render filled button with light hover', () => {
        const {asFragment} = render(<LinkButton
            variant="filled"
            size="small"
            label="Click me"
            hoverVariant="light"
            to="/link"
        />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render fullwidth button', () => {
        const {asFragment} = render(<LinkButton
            variant="outlined"
            size="medium"
            label="Click me"
            fullWidth
            to="/link"
        />);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render button with arrow', () => {
        const {container, asFragment} = render(<LinkButton
            variant="outlined"
            size="medium"
            label="Click me"
            fullWidth
            hasArrow
            to="/link"
        />);

        const buttonArrow = container.querySelector('button');
        expect(buttonArrow).toBeDefined()
        expect(asFragment()).toMatchSnapshot();
    })
    it('should redirect when clicked', () => {
        const {container, asFragment} = render(<LinkButton
            variant="outlined"
            size="medium"
            label="Click me"
            to="/link"
        />);

        fireEvent.click(container.firstChild!);
        expect(mockHistory.location.pathname).toBe("/link");

        expect(asFragment()).toMatchSnapshot();
    })
})