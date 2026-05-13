import { useNavigate } from "react-router";
import { useFavorites } from "@/features/favorites-menu";
import { MovieCard } from "@/entities/movie";
import styles from "./FavoritesPage.module.scss";

export const FavoritesPage = () => {
    const { favorites, remove } = useFavorites();

    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <div className="container">
                {favorites.length === 0 ? (
                    <div className={styles.empty}>
                        <span className={styles.emptyTitle}>Упс</span>
                        <h2 className={styles.emptyMessage}>
                            Вы пока ничего не добавили
                        </h2>
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className={styles.backwardButton}
                        >
                            Назад
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className={styles.title}>
                            Избранное
                            <span className={styles.count}>
                                {favorites.length}
                            </span>
                        </h2>
                        <ul className={styles.grid}>
                            {favorites.map((movie) => (
                                <li
                                    className={styles.gridItem}
                                    key={movie.kinopoiskId}
                                >
                                    <MovieCard {...movie} />

                                    <button
                                        className={styles.removeButton}
                                        onClick={() =>
                                            remove(movie.kinopoiskId)
                                        }
                                        type="button"
                                    >
                                        Удалить
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};
