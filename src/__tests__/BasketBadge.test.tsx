import {render} from "./__utils__/store-wrapper";
import BasketBadge from "../components/BasketBadge";

describe('BasketBadge component', () => {
    it('should render header component', () => {
        const {asFragment, getByTestId} = render(<BasketBadge count={1}/>);

        const basketIcon = getByTestId('basket-icon');
        expect(basketIcon).toBeDefined();

        const counter = getByTestId('counter');
        expect(Number(counter.textContent)).toBe(1);

        expect(asFragment()).toMatchSnapshot();
    })
    it('should no display if counter is zero', () => {
        const {queryByTestId} = render(<BasketBadge count={0}/>);

        expect(queryByTestId('basket-icon')).toBeFalsy();

        expect(queryByTestId('counter')).toBeFalsy();
    })
})