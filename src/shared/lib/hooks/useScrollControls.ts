import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollControls = (scrollAmount: number = 320) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = useCallback(() => {
        const node = ref.current;
        if (!node) return;

        setCanScrollLeft(node.scrollLeft > 0);
        setCanScrollRight(
            node.scrollLeft + node.clientWidth < node.scrollWidth - 1,
        );
    }, []);

    const handleScrollLeft = useCallback(() => {
        ref.current?.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    }, [scrollAmount]);

    const handleScrollRight = useCallback(() => {
        ref.current?.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    }, [scrollAmount]);
    useEffect(() => {
        updateScrollState();

        const handleResize = () => updateScrollState();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [updateScrollState]);
    return {
        ref,
        canScrollLeft,
        canScrollRight,
        handleScrollLeft,
        handleScrollRight,
        updateScrollState,
    };
};
