import { Link } from "react-router";
import { routePaths } from "@/shared/config/routePaths";
import playBtn from "@/shared/assets/icons/play.svg";
import styles from "./WatchMovieButton.module.scss";

interface Props {
    id: number;
    disabled?: boolean;
}

export const WatchMovieButton = ({ id, disabled }: Props) => {
    if (disabled)
        return (
            <button
                type="button"
                className={`${styles.playButton} ${styles.unvailableButton}`}
                disabled
            >
                К сожалению не доступно
            </button>
        );

    return (
        <Link to={routePaths.watch(id)} className={styles.playButton}>
            <img src={playBtn} alt="" width={20} height={20} />
            Смотреть
        </Link>
    );
};
