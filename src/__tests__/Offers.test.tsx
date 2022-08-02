import {render} from "./__utils__/store-wrapper";
import Offers from "../components/Sections/Offers";
import {mockOffers} from "./__mock__/mock-offers";

describe('Offers component', () => {
    it('should render component', () => {
        const {container, asFragment} = render(<Offers offers={mockOffers.slice(0,2)}/>)

        expect(container.firstChild!.childNodes.length).toEqual(2);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render component if offers more then 2', () => {
        const {container, asFragment} = render(<Offers offers={mockOffers}/>)

        expect(container.firstChild!.childNodes.length).toEqual(2);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should be empty if offers less then 2', () => {
        const {container, asFragment} = render(<Offers offers={mockOffers.slice(0,1)}/>)

        expect(container.firstChild).toBeEmptyDOMElement()
        expect(asFragment()).toMatchSnapshot();
    });
})