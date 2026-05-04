import { useAppSelector } from "@/app/providers/store/config/hooks";
import { selectFavorites } from "@/entities/favorites";
import { TitleCard } from "@/entities/title";
import styles from "./FavoritesPage.module.scss";

export const FavoritesPage = () => {
    const favorites = useAppSelector(selectFavorites);

    return (
        <div className={styles.page}>
            <div className="container">
                {favorites.length === 0 ? (
                    <div className={styles.empty}>
                        <span className={styles.emptyTitle}>Упс</span>
                        <h2 className={styles.emptyMessage}>
                            Вы пока ничего не добавили
                        </h2>
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
                            {favorites.map((title) => (
                                <li key={title.kinopoiskId}>
                                    <TitleCard {...title} />
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};
