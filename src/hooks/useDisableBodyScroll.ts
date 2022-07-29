import {useEffect} from "react";

export const useDisableBodyScroll = (isScrollDisabled: boolean) => {
    useEffect(() => {
        if (isScrollDisabled) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isScrollDisabled]);
};