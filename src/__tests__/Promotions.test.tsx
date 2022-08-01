import {render} from "./utils/store-wrapper";
import Promotions from "../components/Sections/Promotions";
import {mockPromotions} from "./__mock__";

describe('Promotions component', () => {
    it('should render component', () => {
        const {container, asFragment} = render(<Promotions promotions={mockPromotions.slice(0,3)}/>);

        expect(container.firstChild!.childNodes.length).toEqual(3);
        expect(asFragment()).toMatchSnapshot();
    })
    it('should be empty promotions count less then 3', () => {
        const {container} = render(<Promotions promotions={mockPromotions.slice(0,2)}/>);

        expect(container.firstChild!.childNodes.length).toEqual(0);
    })
    it('should render correct when promotions count more then 3', () => {
        const {container} = render(<Promotions promotions={mockPromotions}/>);

        expect(container.firstChild!.childNodes.length).toEqual(3);
    })
})