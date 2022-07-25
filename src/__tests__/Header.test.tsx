import Header from "../components/Header";
import {render} from "./utils/store-wrapper";
import {mockHeader} from "./__mock__";

describe('Header component', () => {
    it('should render header component', () => {
        const {container, asFragment, getAllByAltText} = render(<Header/>, {
            initialState: {
                app_layout: {
                    header: mockHeader,
                    isLoading: false
                }
            }
        });
        expect(container).toHaveTextContent('Shop Now');
        expect(container).toHaveTextContent(mockHeader.navigation[1].name);
        expect(getAllByAltText("Logo")).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render header component while header data is loading', () => {
        const {container, asFragment} = render(<Header/>, {
            initialState: {
                app_layout: {
                    isLoading: true
                }
            }
        });
        expect(container).toHaveTextContent('Shop Now');
        expect(container).not.toHaveTextContent(mockHeader.navigation[2].name);
        expect(container).not.toHaveTextContent(mockHeader.logo.url);
        expect(asFragment()).toMatchSnapshot();
    })
})