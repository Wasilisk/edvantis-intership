import {render} from "@testing-library/react";
import Navigation from "../components/Header/Navigation";
import {mockLinks} from "./__mock__";

describe('Navigation component', () => {
    it('should render navigation links', () => {
        const {asFragment, getByText} = render(<Navigation isLoading={false} links={mockLinks}/>);
        expect(getByText('Link 2')).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    })
    it('should be empty while header is loading', () => {
        const {container} = render(<Navigation isLoading={true} links={mockLinks}/>);
        expect(container.firstChild).toBeEmptyDOMElement()
        expect(container).not.toHaveTextContent('Link 1');
    })
})