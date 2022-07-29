import {render} from "./utils/store-wrapper";
import StyledText from "../components/common/StyledText";
import {mockStyledText} from "./__mock__/mock-styled-text";

describe('StyledText component', () => {
    it('should render component', () => {
        const {container, asFragment} = render(<p><StyledText {...mockStyledText}/></p>);

        expect(container.firstChild).toHaveTextContent(mockStyledText.before_highlight!);
        expect(container.firstChild).toHaveTextContent(mockStyledText.highlight!);
        expect(container.firstChild).toHaveTextContent(mockStyledText.after_highlight!);

        expect(asFragment()).toMatchSnapshot();
    })
})