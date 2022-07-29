import {render} from "./utils/store-wrapper";
import {mockBanner} from "./__mock__";
import {fireEvent} from "@testing-library/react";
import ParallaxBanner from "../components/Banners/ParallaxBanner";
import {mockHistory} from "./utils/history-wrapper";

describe('ParallaxBanner component', () => {
    it('should render component', () => {
        const {getByText, asFragment, getByTestId} = render(<ParallaxBanner {...mockBanner}/>);

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