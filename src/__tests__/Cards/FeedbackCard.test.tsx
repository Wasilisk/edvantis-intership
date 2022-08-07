import {render} from "../__utils__/store-wrapper";
import FeedbackCard from "../../components/Cards/FeedbackCard";
import {mockFeedback} from "../__mock__/mock-feedback";
import {parseDate} from "../../utils/parseDate";

describe('FeedbackCard component', () => {
    it('should render component', () => {
        const {getByText, asFragment} = render(<FeedbackCard {...mockFeedback}/>);

        const username = getByText(new RegExp(mockFeedback.firstname));
        expect(username.textContent).toBe(`${mockFeedback.firstname} ${mockFeedback.surname}`);

        const department = getByText(new RegExp(mockFeedback.department));
        expect(department.textContent).toBe(`About ${mockFeedback.department}`);

        const rating = getByText(`${mockFeedback.rating * 2}/10`);
        expect(rating).toBeDefined();

        const comment = getByText(mockFeedback.comment);
        expect(comment).toBeDefined();

        const time = getByText(parseDate(mockFeedback.created_at));
        expect(time).toBeDefined();


        expect(asFragment()).toMatchSnapshot();
    })
})