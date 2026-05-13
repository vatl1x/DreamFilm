import { useRef } from "react";
import { useSearchMovie } from "../../model/useSearchMovie";
import { Dropdown } from "@/shared/ui";
import SearchIcon from "@/shared/assets/icons/search.svg?react";
import CloseIcon from "@/shared/assets/icons/close.svg?react";
import { SearchDropdown } from "../SearchDropdown/SearchDropdown";
import styles from "./SearchMovie.module.scss";

export const SearchMovie = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const {
        isOpen,
        // isLoading,
        query,
        results,
        shouldShowDropdown,
        searchRef,
        setQuery,
        handleClose,
        handleOpenSearch,
    } = useSearchMovie();

    return (
        <div className={styles.search} ref={searchRef}>
            <button
                type="button"
                className={`${styles.searchButton} ${isOpen ? styles.searchButtonHidden : ""}`}
                onClick={() => handleOpenSearch(inputRef)}
                aria-label="Открыть поиск"
            >
                <SearchIcon width={22} height={22} />
            </button>

            <div
                className={`${styles.searchPanel} ${isOpen ? styles.searchPanelOpen : ""}`}
            >
                <span className={styles.searchIcon}>
                    <SearchIcon width={22} height={22} />
                </span>

                <input
                    ref={inputRef}
                    className={styles.input}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                {query && (
                    <button
                        type="button"
                        className={styles.clearButton}
                        onClick={() => setQuery("")}
                        aria-label="Очистить поиск"
                    >
                        <CloseIcon width={16} height={16} />
                    </button>
                )}
            </div>

            <Dropdown isOpen={shouldShowDropdown}>
                <SearchDropdown results={results} onClose={handleClose} />
            </Dropdown>
        </div>
    );
};
