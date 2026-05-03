import { useEffect } from "react";
import { scrollToTop } from "../helpers/scrollToTop";

export const useScrollToTop = (dependence?: unknown) => {
    useEffect(() => {
        const timeout = setTimeout(scrollToTop, 100);
        return () => clearTimeout(timeout);
    }, [dependence]);
};
