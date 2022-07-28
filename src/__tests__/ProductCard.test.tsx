import {render} from "./utils/store-wrapper";
import {fireEvent} from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import {mockProductCard} from "./__mock__/mock-product-card";
import {createMemoryHistory} from "history";

describe('ProductCard component', () => {
    it('should render component', () => {
        const history = createMemoryHistory({initialEntries: ['/']});
        const {getByText, asFragment, getByAltText} = render(
            <HistoryRouter history={history}>
                <ProductCard content={mockProductCard} buttonVariant="filled"/>
            </HistoryRouter>
        );

        const cardImage = getByAltText(mockProductCard.name);
        expect(cardImage).toHaveAttribute('src', mockProductCard.image.url);
        fireEvent.click(cardImage);
        expect(history.location.pathname).toBe(`/${mockProductCard.search_name}`);

        const productName = getByText(mockProductCard.name);
        expect(productName).toBeDefined();

        const productPrice = getByText(`${mockProductCard.price.toFixed(2)}USD`);
        expect(productPrice).toBeDefined();

        expect(asFragment()).toMatchSnapshot();
    })
})