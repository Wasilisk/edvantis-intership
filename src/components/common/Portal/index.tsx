import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {PortalProps} from "./types";

const Portal = ({children}: PortalProps) => {
    const [container] = useState<HTMLDivElement>(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ReactDOM.createPortal(children, container);
};

export default Portal;