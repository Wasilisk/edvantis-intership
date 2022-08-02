import React, {ReactNode} from 'react';
import {createMemoryHistory} from "history";
import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";

export const mockHistory = createMemoryHistory({initialEntries: ['/']});

type HistoryWrapperProps = {
    children: ReactNode
}

const HistoryWrapper = ({children}: HistoryWrapperProps) => {
    return (
        <HistoryRouter history={mockHistory}>
            {children}
        </HistoryRouter>
    );
};

export default HistoryWrapper;