import {render} from "../__utils__/store-wrapper";
import Portal from "../../components/common/Portal";

describe('Portal component', () => {
    it('should appends the element when the component is mounted', () => {
        const { asFragment, getByText } = render(<Portal><p>Children</p></Portal>)

        const children = getByText('Children');
        expect(children).toBeDefined();

        expect(asFragment()).toMatchSnapshot();
    })
})