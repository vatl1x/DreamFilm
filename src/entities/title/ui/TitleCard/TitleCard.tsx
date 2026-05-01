import { Link } from "react-router";
import { routePaths } from "@/shared/config/routePaths";
import { NO_POSTER } from "../../model/constants";
import { Title } from "../../model/types";
import { TitlePoster } from "../TitlePoster/TitlePoster";
import styles from "./TitleCard.module.scss";

type Props = Pick<
    Title,
    | "kinopoiskId"
    | "nameRu"
    | "posterUrl"
    | "ratingKinopoisk"
    | "genres"
    | "year"
>;

export const TitleCard = ({
    kinopoiskId,
    nameRu,
    posterUrl,
    ratingKinopoisk,
    genres,
    year,
}: Props) => {
    return (
        <Link to={routePaths.title(kinopoiskId)} className={styles.card}>
            <TitlePoster
                image={posterUrl === NO_POSTER ? null : posterUrl}
                title={nameRu}
                posterSize="card"
                rating={ratingKinopoisk}
                showPlayOverlay={true}
            />

            <div className={styles.filmInfo}>
                <h3 className={styles.title}>{nameRu}</h3>
                <p
                    className={styles.description}
                >{`${year} ${"\u2022"} ${genres.map((g) => g.genre).join(", ")}`}</p>
            </div>
        </Link>
    );
};
