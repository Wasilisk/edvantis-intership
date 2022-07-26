import {render} from "../__utils__/store-wrapper";
import CustomLink from "../../components/common/CustomLink";
import {fireEvent} from "@testing-library/react";
import {mockHistory} from "../__utils__/history-wrapper";

describe('CustomLink component', () => {
    it('should render component', () => {
        const {getByText, asFragment} = render(<CustomLink to="/link" label="Link"/>);

        const linkLabel = getByText("Link");
        expect(linkLabel).toBeDefined();

        fireEvent.click(linkLabel);
        expect(mockHistory.location.pathname).toBe("/link");

        expect(asFragment()).toMatchSnapshot();
    })
})