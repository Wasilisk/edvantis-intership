import {render} from "../__utils__/store-wrapper";
import {fireEvent} from "@testing-library/react";
import PromotionCard from "../../components/Cards/PromotionCard";
import {mockPromotions} from "../__mock__";
import {mockHistory} from "../__utils__/history-wrapper";

describe('PromotionCard component', () => {
    it('should render component', () => {
        const {getByText, asFragment, getByAltText} = render(<PromotionCard {...mockPromotions[0]}/>);

        const cardImage = getByAltText(mockPromotions[0].image.alt);
        expect(cardImage).toHaveAttribute('src', mockPromotions[0].image.url);

        const highlightText = getByText(mockPromotions[0].title.highlight!);
        expect(highlightText).toBeDefined();
        expect(highlightText).toHaveClass(`highlight`);

        const plainText = getByText(mockPromotions[0].title.after_highlight!);
        expect(plainText).toBeDefined();

        const link = getByText(mockPromotions[0].link.name);
        fireEvent.click(link);
        expect(mockHistory.location.pathname).toBe(mockPromotions[0].link.to);

        expect(asFragment()).toMatchSnapshot();
    })
    it('should render component without highlight text', () => {
        const {queryByText, getByText, asFragment, getByAltText} = render(<PromotionCard {...mockPromotions[2]}/>
        );

        const cardImage = getByAltText(mockPromotions[2].image.alt);
        expect(cardImage).toHaveAttribute('src', mockPromotions[0].image.url);

        const highlightText = queryByText("New!");
        expect(highlightText).not.toBeInTheDocument();

        const plainText = getByText(mockPromotions[2].title.after_highlight!);
        expect(plainText).toBeDefined();

        const link = getByText(mockPromotions[2].link.name);
        fireEvent.click(link);
        expect(mockHistory.location.pathname).toBe(mockPromotions[2].link.to);

        expect(asFragment()).toMatchSnapshot();
    })
})