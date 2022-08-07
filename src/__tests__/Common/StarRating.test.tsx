import {render} from "../__utils__/store-wrapper";
import StarRating from "../../components/common/StarRating";
import {fireEvent} from "@testing-library/react";

describe('StarRating component', () => {
    it('should render component', () => {
        const {container, asFragment} = render(<StarRating activeStar={2} precision={1}/>);

        expect(container.firstChild).toBeDefined()

        expect(container.firstChild!.childNodes.length).toBe(5);

        expect(asFragment()).toMatchSnapshot();
    })
    it('should change value', () => {
        const onChange = jest.fn();
        const {container} = render(<StarRating activeStar={2} precision={1} onChange={onChange}/>);

        fireEvent.click(container.firstChild!);
        expect(onChange).toHaveBeenCalled();
    })
})