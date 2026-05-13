import { Link } from "react-router";
import { MovieSearch } from "@/entities/movie/model/types";
import { routePaths } from "@/shared/config/routePaths";
import styles from "./SearchDropdown.module.scss";

interface Props {
    results: MovieSearch[];
    onClose: () => void;
}

export const SearchDropdown = ({ results, onClose }: Props) => {
    return (
        <div className={styles.popover}>
            <h3 className={styles.popoverTitle}>Результаты поиска</h3>

            <ul className={styles.resultsList}>
                {results.map(
                    ({ filmId, nameRu, year, rating, genres, posterUrl }) => (
                        <li key={filmId} className={styles.resultItem}>
                            <Link
                                to={routePaths.movie(filmId)}
                                className={styles.resultButton}
                                onClick={onClose}
                            >
                                <div className={styles.posterWrap}>
                                    <img
                                        src={posterUrl}
                                        alt={nameRu}
                                        className={styles.poster}
                                    />
                                    {rating !== "null" && (
                                        <span className={styles.posterRating}>
                                            {rating}
                                        </span>
                                    )}
                                </div>

                                <div className={styles.resultContent}>
                                    <span className={styles.resultTitle}>
                                        {nameRu}
                                    </span>
                                    <span className={styles.resultMeta}>
                                        {`${year !== "null" ? `${year} ${"\u2022"} ` : ""}${genres.map((g) => g.genre).join(", ")}`}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
};
