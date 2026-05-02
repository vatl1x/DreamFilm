import { Link } from "react-router";
import { Title } from "@/entities/title/model/types";
import { routePaths } from "@/shared/config/routePaths";
import addFavoriteBtn from "@/shared/assets/icons/plus.svg";
import { Pill } from "@/shared/ui/Pill/Pill";
import { getRatingVariant } from "@/shared/lib/helpers/getRatingVariant";
import detailBtn from "@/shared/assets/icons/info.svg";
import styles from "./HeroBanner.module.scss";

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

                <li>
                    <Pill>{year}</Pill>
                </li>

                {ratingAgeLimits && (
                    <li>
                        <Pill>{`${ratingAgeLimits.replace("age", "")}+`}</Pill>
                    </li>
                )}
            </ul>

            <p className={styles.descriptionTitle}>{description}</p>

            <ul className={styles.actionsButtons}>
                {/* <li>
                    <WatchTitleButton id={1} />
                </li> */}
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
                    <button className={styles.addFavoriteButton}>
                        <img
                            src={addFavoriteBtn}
                            alt="В избранное"
                            width={30}
                            height={30}
                        />
                    </button>
                </li>
            </ul>
        </section>
    );
};
