import {render} from "./utils/store-wrapper";
import {mockSectionBanner} from "./__mock__";
import SectionBanner from "../components/Banners/SectionBanner";

describe('Section Banner component', () => {
    it('should render component', () => {
        const {getByText, container, asFragment} = render(<SectionBanner/>,
            {
                initialState: {
                    home_page: {
                        section_banner: mockSectionBanner,
                        isLoading: false
                    }
                }
            });

        expect(container.firstChild).toHaveStyle(`background-image: url(${mockSectionBanner.banner_texture.url})`);

        const highlightText = getByText(mockSectionBanner.title.highlight!);
        expect(highlightText).toBeDefined();

        const plainText = getByText(mockSectionBanner.title.after_highlight!);
        expect(plainText).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    })
    it('should be empty when data is loading', () => {
        const {container} = render(<SectionBanner/>, {
            initialState: {
                home_page: {
                    section_banner: null,
                    isLoading: true
                }
            }
        });

        expect(container.childElementCount).toEqual(0);
    })
})