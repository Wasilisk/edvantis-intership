import {render} from "../__utils__/store-wrapper";
import {fireEvent} from "@testing-library/react";
import OverlayingPopup from "../../components/Popups/OverlayingPopup";

describe('Overlaying component', () => {
    it('should render component', () => {
        const {container, asFragment} = render(<OverlayingPopup
            onClose={() => {
            }}>
            <p>Children</p>
        </OverlayingPopup>);

        expect(container.firstChild).toBeDefined()

        expect(asFragment()).toMatchSnapshot();
    })
    it('should render child component', () => {
        const {getByText} = render(<OverlayingPopup
            onClose={() => {
            }}>
            <p>Children</p>
        </OverlayingPopup>);

        const children = getByText('Children');
        expect(children).toBeDefined();
    })
    it('should close popup when overlay clicked', () => {
        const closeModal = jest.fn();
        const {getByTestId} = render(<OverlayingPopup
            onClose={closeModal}>
            <p>Children</p>
        </OverlayingPopup>);

        const overlay = getByTestId("overlay");
        fireEvent.click(overlay);
        expect(closeModal).toHaveBeenCalled();
    })

})