import { useState, useRef, useCallback } from "react";
import { useGetMoviesByKeywordsQuery } from "@/entities/movie";
import { useClickOutside } from "@/shared/lib/hooks/useClickOutside";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";

export const useSearchMovie = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const searchRef = useRef<HTMLDivElement | null>(null);

    const debouncedQuery = useDebounce(query, 500);

    const { data, isLoading, isFetching } = useGetMoviesByKeywordsQuery(
        debouncedQuery,
        {
            skip: !debouncedQuery.trim(),
        },
    );

    const results =
        query.trim() && query === debouncedQuery && !isFetching
            ? (data?.films ?? [])
            : [];

    const shouldShowDropdown =
        isOpen && query.trim().length > 0 && results.length > 0;

    const handleClose = useCallback(() => {
        setIsOpen(false);
        setQuery("");
    }, []);

    useClickOutside(searchRef, isOpen ? handleClose : undefined);

    const handleOpenSearch = (
        ref: React.RefObject<HTMLInputElement | null>,
    ) => {
        setIsOpen(true);
        setTimeout(() => ref.current?.focus(), 50);
    };

    return {
        isOpen,
        isLoading,
        query,
        results,
        shouldShowDropdown,
        searchRef,
        setIsOpen,
        setQuery,
        handleClose,
        handleOpenSearch,
    };
};
