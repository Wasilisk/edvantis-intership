import {render} from "./__utils__/store-wrapper";
import {mockFooter} from "./__mock__/mock-footer";
import Footer from "../components/Footer";
import {fireEvent, getByAltText} from "@testing-library/react";
import {mockHistory} from "./__utils__/history-wrapper";

describe('Footer component', () => {
    it('should render header component', () => {
        const {asFragment, getByTestId, getByAltText, getByText, getAllByTestId} = render(<Footer {...mockFooter}/>);

        const logoImage = getByAltText('Logo');
        expect(logoImage).toBeDefined();

        const companyDescription = getByText(mockFooter.company_description)
        expect(companyDescription).toBeDefined();

        const navigationLinks = getAllByTestId('link');
        expect(navigationLinks.length).toBe(mockFooter.navigation.length);

        const feedbackButton = getByTestId('feedback-button');
        expect(feedbackButton).toBeDefined();

        expect(asFragment()).toMatchSnapshot();
    })
    it('should navigate when navigation links clicked', () => {
        const {getAllByTestId} = render(<Footer {...mockFooter}/>);

        const navigationLinks = getAllByTestId('link');
        navigationLinks.forEach((link, index) => {
            fireEvent.click(link)
            expect(mockHistory.location.pathname).toBe(mockFooter.navigation[index].to)
        })
    })
    it('should have social links', () => {
        const {getByTestId} = render(<Footer {...mockFooter}/>);

        const instagramLink = getByTestId('instagram-link');
        expect(instagramLink).toHaveAttribute('href', mockFooter.social_links.instagram);

        const facebookLink = getByTestId('facebook-link');
        expect(facebookLink).toHaveAttribute('href', mockFooter.social_links.facebook);

        const youtubeLink = getByTestId('youtube-link');
        expect(youtubeLink).toHaveAttribute('href', mockFooter.social_links.youtube);

    })
})