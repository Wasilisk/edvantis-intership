import {render} from "../__utils__/store-wrapper";
import {mockOffers} from "../__mock__/mock-offers";
import OfferCard from "../../components/Cards/OfferCard";
import {fireEvent} from "@testing-library/react";
import {mockHistory} from "../__utils__/history-wrapper";

describe('OfferCard component', () => {
    it('should render component', () => {
        const {getByText, asFragment, container} = render(<OfferCard {...mockOffers[0]} variant="dark"/>);

        expect(container.firstChild).toHaveStyle(`background-image: url(${mockOffers[0].image.url})`);

        const caption = getByText(mockOffers[0].caption);
        expect(caption).toBeDefined();

        const title = getByText(mockOffers[0].title);
        expect(title).toBeDefined();

        const description = getByText(mockOffers[0].description);
        expect(description).toBeDefined();

        const linkButton = getByText(mockOffers[0].link.name);
        fireEvent.click(linkButton);
        expect(mockHistory.location.pathname).toBe(mockOffers[0].link.to);

        expect(asFragment()).toMatchSnapshot();
    })
})