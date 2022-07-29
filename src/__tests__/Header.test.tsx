import Header from "../components/Header";
import {render} from "./utils/store-wrapper";
import {mockHeader} from "./__mock__";

describe('Header component', () => {
    it('should render header component', () => {
        const {container, asFragment, getAllByAltText} = render(<Header {...mockHeader}/>);
        expect(container).toHaveTextContent('Shop Now');
        expect(container).toHaveTextContent(mockHeader.navigation[1].name);
        expect(getAllByAltText("Logo")).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    })
})