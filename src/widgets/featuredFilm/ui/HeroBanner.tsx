import { Link } from "react-router";
import { WatchTitleButton } from "@/features/watch-title";
import { Title } from "@/entities/title/model/types";
import { routePaths } from "@/shared/config/routePaths";
import { Pill } from "@/shared/ui/Pill/Pill";
import { getRatingVariant } from "@/shared/lib/helpers/getRatingVariant";
import detailBtn from "@/shared/assets/icons/info.svg";
import styles from "./HeroBanner.module.scss";
import { AddToFavoritesButton } from "@/features/add-to-favorite";

interface Props {
    title: Title;
}

export const HeroBanner = ({ title }: Props) => {
    if (!title) return;

    const {
        kinopoiskId,
        nameRu,
        ratingKinopoisk,
        year,
        posterUrl,
        genres,
        ratingAgeLimits,
        description,
        coverUrl,
    } = title;

    return (
        <section
            className={styles.heroBanner}
            style={{
                backgroundImage: coverUrl
                    ? `url(${coverUrl})`
                    : `url(${posterUrl})`,
            }}
        >
            <span className={styles.janreName}>
                {genres.map((g) => g.genre).join(", ")}
            </span>
            <h1 className={styles.filmsName}>{nameRu}</h1>

            <ul className={styles.dataTablets}>
                {ratingKinopoisk !== null && (
                    <li>
                        <Pill variant={getRatingVariant(ratingKinopoisk)}>
                            {ratingKinopoisk.toFixed(1)} KP
                        </Pill>
                    </li>
                )}

                {year !== null && (
                    <li>
                        <Pill>{year}</Pill>
                    </li>
                )}

                {ratingAgeLimits && (
                    <li>
                        <Pill>{`${ratingAgeLimits.replace("age", "")}+`}</Pill>
                    </li>
                )}
            </ul>

            <p className={styles.descriptionTitle}>{description}</p>

            <ul className={styles.actionsButtons}>
                <li>
                    <WatchTitleButton id={kinopoiskId} />
                </li>
                <li>
                    <Link
                        to={routePaths.title(kinopoiskId)}
                        className={styles.detailButton}
                    >
                        <img src={detailBtn} alt="" width={20} height={20} />
                        Подробнее
                    </Link>
                </li>
                <li>
                    <AddToFavoritesButton title={title} />
                </li>
            </ul>
        </section>
    );
};
