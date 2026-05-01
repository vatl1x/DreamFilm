import { useEffect, useRef, useState } from "react";

export const useScrollControls = (scrollAmount: number = 320) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = () => {
        const node = ref.current;
        if (!node) return;

        setCanScrollLeft(node.scrollLeft > 0);
        setCanScrollRight(
            node.scrollLeft + node.clientWidth < node.scrollWidth - 1,
        );
    };

    const handleScrollLeft = () => {
        ref.current?.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    };

    const handleScrollRight = () => {
        ref.current?.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        updateScrollState();

        const handleResize = () => updateScrollState();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return {
        ref,
        canScrollLeft,
        canScrollRight,
        handleScrollLeft,
        handleScrollRight,
        updateScrollState,
    };
};
