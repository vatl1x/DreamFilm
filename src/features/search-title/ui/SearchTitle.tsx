import { useMemo, useRef, useState } from "react";
import { useClickOutside } from "@/shared/lib/hooks/useClickOutside";
import { Dropdown } from "@/shared/ui/Dropdown";
import SearchIcon from "@/shared/assets/icons/search.svg?react";
import CloseIcon from "@/shared/assets/icons/close.svg?react";
import poster from "@/shared/assets/icons/1.webp";
import styles from "./SearchTitle.module.scss";

const mockDate = [
    {
        id: 1,
        title: "Интерстеллар",
        meta: "2014 • Научная фантастика",
    },
    {
        id: 2,
        title: "Дюна: Часть Вторая",
        meta: "2024 • Фантастика",
    },
] as const;

export const SearchTitle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const searchRef = useRef<HTMLDivElement | null>(null);

    const results = useMemo(() => {
        const value = query.trim().toLowerCase();
        if (!value) return [];

        return mockDate.filter((item) =>
            item.title.toLowerCase().includes(value),
        );
    }, [query]);

    const shouldShowDropdown =
        isOpen && query.trim().length > 0 && results.length > 0;

    useClickOutside(searchRef, isOpen ? () => setIsOpen(false) : undefined);

    return (
        <div className={styles.search} ref={searchRef}>
            <button
                type="button"
                className={`${styles.searchButton} ${isOpen ? styles.searchButtonHidden : ""}`}
                onClick={() => setIsOpen(true)}
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
                    className={styles.input}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsOpen(true)}
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
                <div className={styles.popover}>
                    <h3 className={styles.popoverTitle}>Результаты поиска</h3>

                    <ul className={styles.resultsList}>
                        {results.map((item) => (
                            <li key={item.id} className={styles.resultItem}>
                                <button
                                    type="button"
                                    className={styles.resultButton}
                                >
                                    <div className={styles.posterWrap}>
                                        <img
                                            src={poster}
                                            alt={item.title}
                                            className={styles.poster}
                                        />
                                    </div>

                                    <div className={styles.resultContent}>
                                        <span className={styles.resultTitle}>
                                            {item.title}
                                        </span>
                                        <span className={styles.resultMeta}>
                                            {item.meta}
                                        </span>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </Dropdown>
        </div>
    );
};
