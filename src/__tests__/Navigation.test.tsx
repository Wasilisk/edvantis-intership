import Navigation from "../components/Header/Navigation";
import {mockLinks} from "./__mock__";
import {render} from "./__utils__/store-wrapper";

describe('Navigation component', () => {
    it('should render navigation links', () => {
        const {asFragment, getByText} = render(<Navigation links={mockLinks}/>);
        expect(getByText('Link 1')).toBeInTheDocument();
        expect(getByText('Link 2')).toBeInTheDocument();
        expect(getByText('Link 3')).toBeInTheDocument();
        expect(getByText('Link 4')).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    })
})