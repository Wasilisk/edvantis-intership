import {render} from "./__utils__/store-wrapper";
import GoodsSelection from "../components/Sections/GoodsSelection";
import {mockGoodsSelection} from "./__mock__/mock-goods-selection";

describe('GoodsSelection component', () => {
    it('should render component', () => {
        const {getByText, asFragment, getAllByText} = render(<GoodsSelection {...mockGoodsSelection}/>)
        const sectionTitle = getByText(mockGoodsSelection.title);
        expect(sectionTitle).toBeDefined();

        const sectionDescription = getByText(mockGoodsSelection.description);
        expect(sectionDescription).toBeDefined();

        expect(getAllByText("Order Now").length).toBe(3);

        expect(asFragment()).toMatchSnapshot();
    });
})