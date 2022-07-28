import {useEffect} from "react";

export const useDisableBodyScroll = (isBoolean: boolean) => {
    useEffect(() => {
        if (isBoolean) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isBoolean]);
};