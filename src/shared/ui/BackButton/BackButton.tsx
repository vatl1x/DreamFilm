import { useNavigate } from "react-router";
import BackArrow from "@/shared/assets/icons/arrow-left.svg?react";
import styles from "./BackButton.module.scss";

export const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate(-1)}
        >
            <BackArrow width={20} height={20} />
            <span>Назад</span>
        </button>
    );
};
