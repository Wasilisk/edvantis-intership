import {render} from "./utils/store-wrapper";
import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import {createMemoryHistory} from "history";
import Promotions from "../components/Promotions";
import {mockPromotions} from "./__mock__";

describe('Promotions component', () => {
    it('should render component', () => {
        const history = createMemoryHistory({ initialEntries: ['/'] });
        const {container, asFragment} = render(
            <HistoryRouter history={history}>
                <Promotions/>
            </HistoryRouter>, {
                initialState: {
                    home_page: {
                        promotions: mockPromotions,
                        isLoading: false
                    }
                }
            });

        expect(container.firstChild!.childNodes.length).toEqual(3);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should be empty when data is loading', () => {
        const {container} = render(<Promotions/>, {
            initialState: {
                home_page: {
                    main_banner: null,
                    isLoading: true
                }
            }
        });

        expect(container.firstChild!.childNodes.length).toEqual(0);
    })
    it('should be empty promotions count less then 3', () => {
        const {container} = render(<Promotions/>, {
            initialState: {
                home_page: {
                    main_banner: mockPromotions.slice(0,2),
                    isLoading: false
                }
            }
        });

        expect(container.firstChild!.childNodes.length).toEqual(0);
    })
})