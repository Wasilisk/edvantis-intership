import MainBanner from "../../components/Banners/MainBanner";
import {render} from "../__utils__/store-wrapper";
import {mockBanner} from "../__mock__";
import {fireEvent} from "@testing-library/react";
import {mockHistory} from "../__utils__/history-wrapper";

describe('MainBanner component', () => {
    it('should render component', () => {
        const {getByText, asFragment, getByTestId} = render( <MainBanner {...mockBanner}/>);

        expect(getByTestId('banner')).toHaveStyle(`background-image: url(${mockBanner.image.url})`);

        const highlightText = getByText(mockBanner.title.highlight!);
        expect(highlightText).toBeDefined();

        const plainText = getByText(mockBanner.title.after_highlight!);
        expect(plainText).toBeDefined();

        const linkButton = getByTestId('link-button');
        expect(linkButton).toHaveTextContent(mockBanner.link.name);
        fireEvent.click(linkButton);
        expect(mockHistory.location.pathname).toBe(mockBanner.link.to);

        expect(asFragment()).toMatchSnapshot();
    })
})