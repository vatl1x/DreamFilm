import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { useGetMoviesQuery } from "@/entities/title";
import { Title, CollectionType } from "@/entities/title/model/types";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";

export const useCollectionPage = () => {
    const { collection } = useParams();
    const [page, setPage] = useState(1);
    const [allTitles, setAllTitles] = useState<Title[]>([]);
    const lastItemRef = useRef<HTMLLIElement | null>(null);

    const { data, isFetching } = useGetMoviesQuery({
        collection: collection as CollectionType,
        page,
    });

    useEffect(() => {
        if (data?.items) {
            setAllTitles((prev) => {
                //сет чтобы отсеить дубликаты(проблем kinopUNO)
                const uniqueIds = new Set(prev.map((t) => t.kinopoiskId));
                const newItems = data.items.filter(
                    (t) => !uniqueIds.has(t.kinopoiskId),
                );
                return [...prev, ...newItems];
            });
        }
    }, [data]);

    useInfiniteScroll({
        lastItemRef,
        isFetching,
        totalPages: data?.totalPages,
        page,
        onLoadMore: () => setPage((prev) => prev + 1),
        listLength: allTitles.length,
    });
    const isInitialLoading = isFetching && allTitles.length === 0;
    const isFetchingMore = isFetching && allTitles.length > 0;

    return {
        collection,
        allTitles,
        lastItemRef,
        isInitialLoading,
        isFetchingMore,
    };
};
