import { WatchTitleButton } from "@/features/watch-title";
import { AddToFavoritesButton } from "@/features/add-to-favorite";
import { Pill } from "@/shared/ui/Pill";
import { TitleDetail } from "../../model/types";
import styles from "./TitleInfo.module.scss";

interface Props {
    title: TitleDetail;
    isUnvailableWatch?: boolean;
}

export const TitleInfo = ({ title, isUnvailableWatch }: Props) => {
    return (
        <div className={styles.infoColumn}>
            <div className={styles.headBlock}>
                <h1 className={styles.title}>{title.nameRu}</h1>
                <h2 className={styles.originalTitle}>{title.nameEn}</h2>
            </div>

            <div className={styles.metaList}>
                {title.year && <Pill>{title.year}</Pill>}
                {title.filmLength && <Pill>{title.filmLength} мин</Pill>}
                <Pill>{title.countries.map((c) => c.country).join(", ")}</Pill>
                {title.ratingAgeLimits && (
                    <Pill>{`${title.ratingAgeLimits.replace("age", "")}+`}</Pill>
                )}
            </div>

            <div className={styles.genresBlock}>
                <span className={styles.sectionLabel}>Жанры</span>

                <div className={styles.genreList}>
                    {title.genres.map(({ genre }) => (
                        <Pill key={genre} className={styles.genrePill}>
                            {genre}
                        </Pill>
                    ))}
                </div>
            </div>

            {title.description && (
                <div className={styles.descriptionBlock}>
                    <span className={styles.sectionLabel}>Сюжет</span>

                    <p className={styles.description}>{title.description}</p>

                    <p className={styles.shortDescription}>
                        {title.shortDescription}
                    </p>
                </div>
            )}

            <div className={styles.actions}>
                <WatchTitleButton
                    id={title.kinopoiskId}
                    disabled={isUnvailableWatch}
                />
                <AddToFavoritesButton />
            </div>
        </div>
    );
};
