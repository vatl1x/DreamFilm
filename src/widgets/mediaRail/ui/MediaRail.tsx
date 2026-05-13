import { Link } from "react-router";
import { MovieCard } from "@/entities/movie";
import { CollectionType, Movie } from "@/entities/movie/model/types";
import { useScrollControls } from "@/shared/lib/hooks/useScrollControls";
import ArrowIcon from "@/shared/assets/icons/arrow-left.svg?react";
import styles from "./MediaRail.module.scss";
import { routePaths } from "@/shared/config/routePaths";

interface Props {
    label: string;
    data: Movie[];
    collectionType: CollectionType;
}
export const MediaRail = ({ label, data, collectionType }: Props) => {
    const {
        ref,
        canScrollLeft,
        canScrollRight,
        handleScrollLeft,
        handleScrollRight,
        updateScrollState,
    } = useScrollControls();

    return (
        <section className={styles.mediaRail}>
            <div className={styles.railHeader}>
                <h2 className={styles.railLabel}>{label}</h2>

                <Link
                    to={routePaths.collection(collectionType)}
                    className={styles.viewAllLink}
                >
                    <span>Смотреть все</span>
                    <span className={styles.viewAllArrow}>
                        <ArrowIcon width={15} height={15} />
                    </span>
                </Link>
            </div>

            <div className={styles.railShell}>
                <button
                    type="button"
                    className={`${styles.arrowButton} ${styles.arrowLeft} ${
                        !canScrollLeft ? styles.arrowHidden : ""
                    }`}
                    onClick={handleScrollLeft}
                    aria-label="Прокрутить влево"
                >
                    <span className={styles.arrowIcon}>
                        <ArrowIcon width={30} height={30} />
                    </span>
                </button>

                <div
                    className={styles.railViewport}
                    ref={ref}
                    onScroll={updateScrollState}
                >
                    <ul className={styles.mediaList}>
                        {data?.map((movie) => (
                            <li
                                key={movie.kinopoiskId}
                                className={styles.mediaItem}
                            >
                                <MovieCard
                                    kinopoiskId={movie.kinopoiskId}
                                    nameRu={movie.nameRu}
                                    posterUrl={movie.posterUrl}
                                    ratingKinopoisk={movie.ratingKinopoisk}
                                    genres={movie.genres}
                                    year={movie.year}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    type="button"
                    className={`${styles.arrowButton} ${styles.arrowRight} ${
                        !canScrollRight ? styles.arrowHidden : ""
                    }`}
                    onClick={handleScrollRight}
                    aria-label="Прокрутить вправо"
                >
                    <span
                        className={`${styles.arrowIcon} ${styles.arrowIconRight}`}
                    >
                        <ArrowIcon width={30} height={30} />
                    </span>
                </button>
            </div>
        </section>
    );
};
