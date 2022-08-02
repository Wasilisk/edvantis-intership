import {render} from "./utils/store-wrapper";
import TabsSection from "../components/Sections/TabsSection";
import {mockTabsSection} from "./__mock__/mock-tabs-section";
import {fireEvent} from "@testing-library/react";

describe('TabsSection component', () => {
    it('should render component', () => {
        const {container, getByText, getByTestId, asFragment} = render(<TabsSection {...mockTabsSection}/>);

        const title = getByText(mockTabsSection.title);
        expect(title).toBeDefined();

        const description = getByText(mockTabsSection.description);
        expect(description).toBeDefined();

        const tabs = getByTestId('tabs');
        expect(tabs).toBeDefined();
        expect(tabs.childElementCount).toBe(3);

        expect(container.firstChild!.childNodes.length).toBe(5);

        expect(asFragment()).toMatchSnapshot();
    })
    it('should change content when tab clicked', () => {
        const {getByTestId} = render(<TabsSection {...mockTabsSection}/>);

        const firstTabPanel = getByTestId(`tab-panel-${mockTabsSection.tabs[0].id}`)
        expect(firstTabPanel).toBeDefined();

        const tabs = getByTestId('tabs');
        fireEvent.click(tabs.childNodes[1]);

        const secondTabPanel = getByTestId(`tab-panel-${mockTabsSection.tabs[1].id}`)
        expect(secondTabPanel).toBeDefined();
    })
})