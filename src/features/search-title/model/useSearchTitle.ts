import { useState, useRef } from "react";
import { useGetMoviesByKeywordsQuery } from "@/entities/title";
import { useClickOutside } from "@/shared/lib/hooks/useClickOutside";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";

export const useSearchTitle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const searchRef = useRef<HTMLDivElement | null>(null);

    const debouncedQuery = useDebounce(query, 500);

    const { data, isLoading } = useGetMoviesByKeywordsQuery(debouncedQuery, {
        skip: !debouncedQuery.trim(),
    });

    const results = data?.films ?? [];

    const shouldShowDropdown =
        isOpen && query.trim().length > 0 && results.length > 0;
    useClickOutside(searchRef, isOpen ? () => setIsOpen(false) : undefined);

    const handleOpenSearch = (ref: React.RefObject<HTMLInputElement | null>) => {
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
        handleOpenSearch,
    };
};
