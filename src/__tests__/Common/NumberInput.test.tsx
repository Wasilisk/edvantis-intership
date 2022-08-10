import {render} from "../__utils__/store-wrapper";
import {fireEvent} from "@testing-library/react";
import NumberInput from "../../components/common/NumberInput";
import React from "react";

describe('NumberInput component', () => {
    it('should render component', () => {
        const {asFragment, getByTestId} = render(<NumberInput min={1} max={10} value={1} onChange={() => {}}/>);

        const input = getByTestId("input") as HTMLInputElement;
        expect(Number(input.value)).toBe(1);

        expect(asFragment()).toMatchSnapshot();
    })
    it('should change value', () => {
        const onChange = jest.fn();

        const {getByTestId} = render(<NumberInput min={1} max={10} value={1} onChange={onChange}/>);

        const plusArrow = getByTestId("plus");
        fireEvent.click(plusArrow);
        expect(onChange).toHaveBeenCalled();

        const minusArrow = getByTestId("minus");
        fireEvent.click(minusArrow);
        expect(onChange).toHaveBeenCalledTimes(2)
    })
})