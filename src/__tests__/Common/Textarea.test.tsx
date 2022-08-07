import {render} from "../__utils__/store-wrapper";
import {fireEvent} from "@testing-library/react";
import Textarea from "../../components/common/Textarea";

describe('Textarea component', () => {
    it('should render component', () => {
        const {container, asFragment} = render(<Textarea/>);

        expect(container.firstChild).toBeDefined()
        expect(asFragment()).toMatchSnapshot();
    })
    it('should change value', () => {
        const {getByPlaceholderText} = render(<Textarea placeholder="textarea"/>);

        const textarea = getByPlaceholderText('textarea') as HTMLTextAreaElement;
        fireEvent.change(textarea, {target: {value: 'value'}});
        expect(textarea.value).toBe('value')
    })
})