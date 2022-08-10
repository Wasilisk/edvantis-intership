import {render} from "./__utils__/store-wrapper";
import Shop from "../pages/Shop/Shop";
import {mockProductCard} from "./__mock__/mock-product-card";

describe('Shop component', () => {
    it('should render header component', () => {
        const {asFragment, getByText, getAllByTestId} = render(<Shop/>, {
            initialState: {
                products: {
                    allProducts: [...Array(15)].map((_, index) => Object.assign({}, mockProductCard, { id: index }))
                }
            }

        });

        const title = getByText('Products (15)');
        expect(title).toBeDefined();

        const productCards = getAllByTestId('product-card');
        expect(productCards.length).toBe(15);

        expect(asFragment()).toMatchSnapshot();
    })
})