import { Link } from "react-router";
import { routePaths } from "@/shared/config/routePaths";
import { NO_POSTER } from "../../model/constants";
import { Movie } from "../../model/types";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import styles from "./MovieCard.module.scss";

type Props = Pick<
    Movie,
    | "kinopoiskId"
    | "nameRu"
    | "posterUrl"
    | "ratingKinopoisk"
    | "genres"
    | "year"
>;

export const MovieCard = ({
    kinopoiskId,
    nameRu,
    posterUrl,
    ratingKinopoisk,
    genres,
    year,
}: Props) => {
    return (
        <Link to={routePaths.movie(kinopoiskId)} className={styles.card}>
            <MoviePoster
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
                >{`${year ? `${year} ${"\u2022"} ` : ""}${genres.map((g) => g.genre).join(", ")}`}</p>
            </div>
        </Link>
    );
};
