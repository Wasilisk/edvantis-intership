import {render} from "../__utils__/store-wrapper";
import Input from "../../components/common/Input";
import {fireEvent} from "@testing-library/react";

describe('Input component', () => {
    it('should render component', () => {
        const {container, asFragment} = render(<Input />);

        expect(container.firstChild).toBeDefined()
        expect(asFragment()).toMatchSnapshot();
    })
    it('should change value', () => {
        const {getByPlaceholderText} = render(<Input placeholder="input"/>);

        const input = getByPlaceholderText("input") as HTMLInputElement;
        fireEvent.change(input, {target: {value: 'value'}});
        expect(input.value).toBe('value')
    })
})