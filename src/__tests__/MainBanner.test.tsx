import MainBanner from "../components/Banners/MainBanner";
import {render} from "./utils/store-wrapper";
import {mockMainBanner} from "./__mock__";
import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import {createMemoryHistory} from "history";
import {fireEvent} from "@testing-library/react";

describe('MainBanner component', () => {
    it('should render component', () => {
        const history = createMemoryHistory({ initialEntries: ['/'] });
        const {getByText, asFragment, getByTestId} = render(
            <HistoryRouter history={history}>
                <MainBanner/>
            </HistoryRouter>, {
            initialState: {
                home_page: {
                    main_banner: mockMainBanner,
                    isLoading: false
                }
            }
        });
        expect(getByTestId('banner')).toHaveStyle(`background-image: url(${mockMainBanner.image.url})`);

        const highlightText = getByText(mockMainBanner.title.highlight!);
        expect(highlightText).toBeDefined();

        const plainText = getByText(mockMainBanner.title.after_highlight!);
        expect(plainText).toBeDefined();

        const linkButton = getByTestId('link-button');
        expect(linkButton).toHaveTextContent(mockMainBanner.link.name);
        fireEvent.click(linkButton);
        expect(history.location.pathname).toBe(mockMainBanner.link.to);

        expect(asFragment()).toMatchSnapshot();
    })
    it('should be empty when data is loading', () => {
        const {container} = render(<MainBanner/>, {
            initialState: {
                home_page: {
                    main_banner: null,
                    isLoading: true
                }
            }
        });

        expect(container.childElementCount).toEqual(0);
    })
})