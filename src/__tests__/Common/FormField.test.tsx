import {render} from "../__utils__/store-wrapper";
import FormField from "../../components/common/FormField";

describe('FormField component', () => {
    it('should render component', () => {
        const {asFragment, getByText} = render(<FormField label="field"><p>Children</p></FormField>);

        const label = getByText('field');
        expect(label).toBeDefined();

        expect(getByText(/Children/i)).toBeInTheDocument();

        expect(asFragment()).toMatchSnapshot();
    })
    it('should show the symbol if field is required ', () => {
        const {asFragment, getByText} = render(<FormField label="field" isRequired><p>Children</p></FormField>);

        const required = getByText("*");
        expect(required).toBeInTheDocument();

        expect(asFragment()).toMatchSnapshot();
    })
})