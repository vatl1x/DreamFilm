import { Pill } from "@/shared/ui";
import { MovieDetail } from "../../model/types";
import styles from "./MovieInfo.module.scss";

interface Props {
    movie: MovieDetail;
    renderActions?: React.ReactNode;
}

export const MovieInfo = ({ movie, renderActions }: Props) => {
    return (
        <div className={styles.infoColumn}>
            <div className={styles.headBlock}>
                <h1 className={styles.title}>{movie.nameRu}</h1>
                <h2 className={styles.originalTitle}>{movie.nameEn}</h2>
            </div>

            <div className={styles.metaList}>
                {movie.year && <Pill>{movie.year}</Pill>}
                {movie.filmLength && <Pill>{movie.filmLength} мин</Pill>}
                <Pill>{movie.countries.map((c) => c.country).join(", ")}</Pill>
                {movie.ratingAgeLimits && (
                    <Pill>{`${movie.ratingAgeLimits.replace("age", "")}+`}</Pill>
                )}
            </div>

            <div className={styles.genresBlock}>
                <span className={styles.sectionLabel}>Жанры</span>

                <div className={styles.genreList}>
                    {movie.genres.map(({ genre }) => (
                        <Pill key={genre} className={styles.genrePill}>
                            {genre}
                        </Pill>
                    ))}
                </div>
            </div>

            {movie.description && (
                <div className={styles.descriptionBlock}>
                    <span className={styles.sectionLabel}>Сюжет</span>

                    <p className={styles.description}>{movie.description}</p>

                    <p className={styles.shortDescription}>
                        {movie.shortDescription}
                    </p>
                </div>
            )}

            {renderActions && (
                <div className={styles.actions}>{renderActions} </div>
            )}
        </div>
    );
};
