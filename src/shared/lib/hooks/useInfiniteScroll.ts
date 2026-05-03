import { RefObject, useEffect } from "react";

interface Props {
    lastItemRef: RefObject<HTMLLIElement | null>;
    isFetching: boolean;
    totalPages?: number;
    page: number;
    onLoadMore: () => void;
    listLength: number;
}

export const useInfiniteScroll = ({
    lastItemRef,
    isFetching,
    totalPages,
    page,
    onLoadMore,
    listLength,
}: Props) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (
                    entries[0].isIntersecting &&
                    !isFetching &&
                    totalPages &&
                    page < totalPages
                ) {
                    onLoadMore();
                }
            },
            { threshold: 1.0 },
        );

        if (lastItemRef.current) {
            observer.observe(lastItemRef.current);
        }
        return () => observer.disconnect();
    }, [isFetching, page, totalPages, lastItemRef, listLength]);
};
