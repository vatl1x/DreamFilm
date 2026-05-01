import { useState } from "react";
import plusBtn from "@/shared/assets/icons/plus.svg";
import checkmarkBtn from "@/shared/assets/icons/checkmark.svg";
import styles from "./AddToFavoritesButton.module.scss";

export const AddToFavoritesButton = () => {
    const [isAdded, setIsAdded] = useState(false);

    return (
        <button
            type="button"
            className={`${styles.iconButton} ${
                isAdded ? styles.iconButtonActive : ""
            }`}
            onClick={() => setIsAdded((prev) => !prev)}
            aria-label={
                isAdded ? "Удалить из избранного" : "Добавить в избранное"
            }
        >
            <img
                src={isAdded ? checkmarkBtn : plusBtn}
                alt=""
                width={22}
                height={22}
            />
        </button>
    );
};
