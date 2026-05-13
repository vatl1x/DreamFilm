import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { useGetMoviesQuery } from "@/entities/movie";
import { Movie, CollectionType } from "@/entities/movie/model/types";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";

export const useCollectionPage = () => {
    const { collection } = useParams();
    const [page, setPage] = useState(1);
    const [allMovies, setAllMovies] = useState<Movie[]>([]);
    const lastItemRef = useRef<HTMLLIElement | null>(null);

    const { data, isFetching } = useGetMoviesQuery(
        {
            collection: collection as CollectionType,
            page,
        },
        {
            skip: !collection,
        },
    );

    useEffect(() => {
        setPage(1);
        setAllMovies([]);
    }, [collection]);

    useEffect(() => {
        if (data?.items) {
            setAllMovies((prev) => {
                //сет чтобы отсеить дубликаты(проблем kinopUNO)
                const uniqueIds = new Set(prev.map((t) => t.kinopoiskId));
                const newItems = data.items.filter(
                    (t) => !uniqueIds.has(t.kinopoiskId),
                );
                return [...prev, ...newItems];
            });
        }
    }, [data?.items]);

    useInfiniteScroll({
        lastItemRef,
        isFetching,
        totalPages: data?.totalPages,
        page,
        onLoadMore: () => setPage((prev) => prev + 1),
        listLength: allMovies.length,
    });
    const isInitialLoading = isFetching && allMovies.length === 0;
    const isFetchingMore = isFetching && allMovies.length > 0;

    return {
        collection,
        allMovies,
        lastItemRef,
        isInitialLoading,
        isFetchingMore,
    };
};
