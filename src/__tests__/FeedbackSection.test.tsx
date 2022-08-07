import {render} from "./__utils__/store-wrapper";
import FeedbackSection from "../components/Sections/FeedbackSection";
import {mockFeedback} from "./__mock__/mock-feedback";

describe('FeedbackSection component', () => {
    it('should render header component', () => {
        const {asFragment, getByText, getAllByTestId} = render(<FeedbackSection
            feedbacks={[...Array(4)].map((_, index) => Object.assign({}, mockFeedback, { id: index }))}
        />);

        const title = getByText('What Our Customers Say');
        expect(title).toBeDefined();

        const description = getByText('We love your feedback on our products!')
        expect(description).toBeDefined();

        const feedbacks = getAllByTestId('feedback-card');
        expect(feedbacks.length).toBe(3);

        expect(asFragment()).toMatchSnapshot();
    })
})