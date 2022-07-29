import {render} from "./utils/store-wrapper";
import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import {createMemoryHistory} from "history";
import {fireEvent} from "@testing-library/react";
import PromotionCard from "../components/Promotions/PromotionCard";
import {mockPromotions} from "./__mock__";

describe('PromotionCard component', () => {
    it('should render component', () => {
        const history = createMemoryHistory({ initialEntries: ['/'] });
        const {getByText, asFragment, getByAltText} = render(
            <HistoryRouter history={history}>
                <PromotionCard content={mockPromotions[0]}/>
            </HistoryRouter>
            );

        const cardImage = getByAltText(mockPromotions[0].image.alt);
        expect(cardImage).toHaveAttribute('src', mockPromotions[0].image.url);

        const highlightText = getByText(mockPromotions[0].title.highlight);
        expect(highlightText).toBeDefined();
        expect(highlightText).toHaveClass(`highlight`);

        const plainText = getByText(mockPromotions[0].title.highlight);
        expect(plainText).toBeDefined();

        const link = getByText(mockPromotions[0].link.name);
        fireEvent.click(link);
        expect(history.location.pathname).toBe(mockPromotions[0].link.to);

        expect(asFragment()).toMatchSnapshot();
    })
})