import {render} from "./utils/store-wrapper";
import {mockSectionBanner} from "./__mock__";
import SectionBanner from "../components/Banners/SectionBanner";

describe('SectionBanner component', () => {
    it('should render component', () => {
        const {getByText, container, asFragment} = render(<SectionBanner {...mockSectionBanner}/>);

        expect(container.firstChild).toHaveStyle(`background-image: url(${mockSectionBanner.banner_texture.url})`);

        const highlightText = getByText(mockSectionBanner.title.highlight!);
        expect(highlightText).toBeDefined();

        const plainText = getByText(mockSectionBanner.title.after_highlight!);
        expect(plainText).toBeDefined();

        expect(asFragment()).toMatchSnapshot();
    })
})