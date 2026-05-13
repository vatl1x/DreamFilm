import { useFavoritesMenu } from "../../model/useFavoritesMenu";
import { Dropdown } from "@/shared/ui";
import { FavoritesDropdown } from "../FavoritesDropdown/FavoritesDropdown";
import FavoriteIcon from "@/shared/assets/icons/favorite.svg?react";
import styles from "./FavoritesMenu.module.scss";

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
                <FavoritesDropdown
                    favorites={favorites}
                    onClose={close}
                    onRemove={handleRemove}
                />
            </Dropdown>
        </div>
    );
};
