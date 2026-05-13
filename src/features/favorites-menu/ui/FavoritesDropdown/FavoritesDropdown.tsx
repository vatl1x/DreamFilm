import { Link } from "react-router";
import { Movie, MovieDetail, NO_POSTER } from "@/entities/movie";
import { PATHS, routePaths } from "@/shared/config/routePaths";
import TrashIcon from "@/shared/assets/icons/trash.svg?react";
import altImage from "@/shared/assets/icons/no-poster.svg";
import styles from "./FavoritesDropdown.module.scss";

interface Props {
    favorites: (Movie | MovieDetail)[];
    onClose: () => void;
    onRemove: (id: number) => void;
}

export const FavoritesDropdown = ({ favorites, onClose, onRemove }: Props) => {
    return (
        <div className={styles.popover}>
            <h3 className={styles.title}>Избранное</h3>
            {favorites.length !== 0 ? (
                <ul className={styles.list}>
                    {favorites.map((item) => (
                        <li key={item.kinopoiskId} className={styles.item}>
                            <Link
                                to={routePaths.movie(item.kinopoiskId)}
                                className={styles.itemLink}
                                onClick={onClose}
                            >
                                <div className={styles.posterWrap}>
                                    <img
                                        src={
                                            item.posterUrl === NO_POSTER
                                                ? altImage
                                                : item.posterUrl
                                        }
                                        alt={item.nameRu}
                                        className={styles.poster}
                                    />
                                </div>

                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>
                                        {item.nameRu}
                                    </span>

                                    <span className={styles.itemMeta}>
                                        {`${item.year !== null ? `${item.year} ${"\u2022"} ` : ""}${item.genres.map((g) => g.genre).join(", ")}`}
                                    </span>
                                    <button
                                        type="button"
                                        className={styles.removeButton}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            onRemove(item.kinopoiskId);
                                        }}
                                    >
                                        <TrashIcon width={14} height={14} />
                                        <span>Удалить</span>
                                    </button>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className={styles.empty}>
                    <p className={styles.emptyMessage}>Пока ничего нет</p>
                </div>
            )}

            {favorites.length > 0 && (
                <Link
                    to={PATHS.FAVORITES}
                    className={styles.viewAllLink}
                    onClick={onClose}
                >
                    Смотреть всё
                </Link>
            )}
        </div>
    );
};
