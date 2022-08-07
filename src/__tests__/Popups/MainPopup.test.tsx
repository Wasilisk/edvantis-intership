import {render} from "../__utils__/store-wrapper";
import {fireEvent} from "@testing-library/react";
import MainPopup from "../../components/Popups/MainPopup";

describe('MainPopup component', () => {
    it('should render component', () => {
        const {container, asFragment, getByText} = render(<MainPopup
            title="Main popup"
            isOpen={true}
            onClose={() => {
            }}>
            <></>
        </MainPopup>);

        expect(container.firstChild).toBeDefined()

        const title = getByText("Main popup");
        expect(title).toBeDefined();

        expect(asFragment()).toMatchSnapshot();
    })
    it('should render child component', () => {
        const { getByText} = render(<MainPopup
            title="Main popup"
            isOpen={true}
            onClose={() => {}}
        >
            <p>Children</p>
        </MainPopup>);

        const children = getByText('Children');
        expect(children).toBeDefined();
    })
    it('should not displayed if isOpen is false', () => {
        const { container } = render(<MainPopup
            title="Main popup"
            isOpen={false}
            onClose={() => {}}
        >
            <p>Children</p>
        </MainPopup>);

        expect(container.firstChild).toBeDefined();
    })
    it('should close popup when button clicked', () => {
        const closeModal = jest.fn();
        const { getByTestId } = render(<MainPopup
            title="Main popup"
            isOpen={true}
            onClose={closeModal}
        >
            <p>Children</p>
        </MainPopup>);

        const button = getByTestId("close-button");
        fireEvent.click(button);
        expect(closeModal).toHaveBeenCalled();
    })

})