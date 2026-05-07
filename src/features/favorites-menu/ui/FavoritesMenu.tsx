import { Link } from "react-router";
import { Dropdown } from "@/shared/ui/Dropdown";
import { PATHS, routePaths } from "@/shared/config/routePaths";
import { NO_POSTER } from "@/entities/title";
import FavoriteIcon from "@/shared/assets/icons/favorite.svg?react";
import TrashIcon from "@/shared/assets/icons/trash.svg?react";
import altImage from "@/shared/assets/icons/no-poster.svg";
import styles from "./FavoritesMenu.module.scss";
import { useFavoritesMenu } from "../model/useFavoritesMenu";

export const FavoritesMenu = () => {
    const { favorites, isOpen, toggle, close, menuRef, handleRemove } =
        useFavoritesMenu();

    return (
        <div className={styles.menu} ref={menuRef}>
            <button
                type="button"
                className={`${styles.trigger} ${isOpen ? styles.triggerActive : ""}`}
                onClick={toggle}
                aria-label="Избранное"
            >
                <FavoriteIcon width={22} height={22} />

                {favorites.length > 0 && (
                    <span className={styles.badge}>{favorites.length}</span>
                )}
            </button>

            <Dropdown isOpen={isOpen}>
                <div className={styles.popover}>
                    <h3 className={styles.title}>Избранное</h3>
                    {favorites.length !== 0 ? (
                        <ul className={styles.list}>
                            {favorites.map((item) => (
                                <li
                                    key={item.kinopoiskId}
                                    className={styles.item}
                                >
                                    <Link
                                        to={routePaths.title(item.kinopoiskId)}
                                        className={styles.itemLink}
                                        onClick={close}
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
                                                    handleRemove(
                                                        item.kinopoiskId,
                                                    );
                                                }}
                                            >
                                                <TrashIcon
                                                    width={14}
                                                    height={14}
                                                />
                                                <span>Удалить</span>
                                            </button>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className={styles.empty}>
                            <p className={styles.emptyMessage}>
                                Пока ничего нет
                            </p>
                        </div>
                    )}

                    {favorites.length > 0 && (
                        <Link
                            to={PATHS.FAVORITES}
                            className={styles.viewAllLink}
                            onClick={close}
                        >
                            Смотреть всё
                        </Link>
                    )}
                </div>
            </Dropdown>
        </div>
    );
};
