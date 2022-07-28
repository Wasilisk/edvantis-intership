import {render} from "./utils/store-wrapper";
import GoodsSelection from "../components/GoodsSelection";
import {mockGoodsSelection} from "./__mock__/mock-goods-selection";
import {createMemoryHistory} from "history";
import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";

describe('GoodsSelection component', () => {
    it('should render component', () => {
        const history = createMemoryHistory({initialEntries: ['/']});
        const {getByText, asFragment, getAllByText} = render(
            <HistoryRouter history={history}>
                <GoodsSelection/>
            </HistoryRouter>, {
                initialState: {
                    home_page: {
                        goods_selection: mockGoodsSelection,
                        isLoading: false
                    }
                }
            });
        const sectionTitle = getByText(mockGoodsSelection.title);
        expect(sectionTitle).toBeDefined();

        const sectionDescription = getByText(mockGoodsSelection.description);
        expect(sectionDescription).toBeDefined();

        expect(getAllByText("Order Now").length).toBe(3);

        expect(asFragment()).toMatchSnapshot();
    });
})