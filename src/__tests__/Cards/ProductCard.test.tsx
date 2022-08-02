import {render} from "../utils/store-wrapper";
import {fireEvent} from "@testing-library/react";
import ProductCard from "../../components/Cards/ProductCard";
import {mockProductCard} from "../__mock__/mock-product-card";
import {mockHistory} from "../utils/history-wrapper";

describe('ProductCard component', () => {
    it('should render component', () => {
        const {getByText, asFragment, getByAltText} = render(<ProductCard {...mockProductCard} buttonVariant="filled"/>);

        const cardImage = getByAltText(mockProductCard.name);
        expect(cardImage).toHaveAttribute('src', mockProductCard.image.url);
        fireEvent.click(cardImage);
        expect(mockHistory.location.pathname).toBe(`/${mockProductCard.search_name}`);

        const productName = getByText(mockProductCard.name);
        expect(productName).toBeDefined();

        const productPrice = getByText(`${mockProductCard.price.toFixed(2)}USD`);
        expect(productPrice).toBeDefined();

        expect(asFragment()).toMatchSnapshot();
    })
})