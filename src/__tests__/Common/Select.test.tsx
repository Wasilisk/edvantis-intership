import {render} from "../__utils__/store-wrapper";
import Select from "../../components/common/Select";

describe('Select component', () => {
    it('should render component', () => {
        const {container, asFragment, getByText} = render(<Select options={[
            {label: "option", value: 1}
        ]}/>);

        expect(container.firstChild).toBeDefined()

        const option = getByText('option') as HTMLOptionElement;
        expect(Number(option.value)).toBe(1);

        expect(asFragment()).toMatchSnapshot();
    })
    it('should show none value option', () => {
        const {asFragment, getByText} = render(<Select
            options={[
                {label: "option", value: 1}
            ]}
            hasNoneValue
        />);

        const noneOption = getByText('None') as HTMLOptionElement;
        expect(noneOption).toBeDefined();
        expect(noneOption.value).toBeFalsy();

        expect(asFragment()).toMatchSnapshot();
    })
    it('should render component without options', () => {
        const {asFragment, getByText} = render(<Select/>);

        const emptyOption = getByText('No data') as HTMLOptionElement;
        expect(emptyOption).toBeDefined();
        expect(emptyOption.value).toBeFalsy();

        expect(asFragment()).toMatchSnapshot();
    })
})