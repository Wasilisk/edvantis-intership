import {render} from "./__utils__/store-wrapper";
import {mockProductCard} from "./__mock__/mock-product-card";
import Product from "../pages/Product/Product";

describe('Product component', () => {
    it('should render header component', () => {
        const {asFragment, getByText, getByAltText} = render(<Product/>, {
            initialState: {
                products: {
                   selectedProduct: mockProductCard
                }
            }

        });

        const productImage = getByAltText(mockProductCard.name);
        expect(productImage).toBeDefined();

        const productStatus = mockProductCard.status.charAt(0).toUpperCase() + mockProductCard.status.slice(1)
        const status = getByText(productStatus);
        expect(status).toBeDefined();

        const productName = getByText(mockProductCard.name);
        expect(productName).toBeDefined();

        const productCode = getByText(`Product code ${mockProductCard.id}`);
        expect(productCode).toBeDefined();

        const productPrice = getByText(`${mockProductCard.price.toFixed(2)}USD`);
        expect(productPrice).toBeDefined();

        const additionalInfo = getByText(mockProductCard.additional_info[0].value)
        expect(additionalInfo).toBeDefined();

        expect(asFragment()).toMatchSnapshot();
    })
})