import { useParams } from "react-router";
import { ImageGallery, ImageGallerySkeleton } from "@/widgets/imageGallery";
import {
    MoviePoster,
    MovieInfo,
    MoviePosterSkeleton,
    MovieInfoSkeleton,
} from "@/entities/movie";
import { useMoviePage } from "../model/hooks/useMoviePage";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import { BackButton } from "@/shared/ui";
import styles from "./MoviePage.module.scss";
import { WatchMovieButton } from "@/features/watch-movie";
import { AddToFavoritesButton } from "@/features/add-to-favorite";

export const MoviePage = () => {
    const { id } = useParams();
    useScrollToTop(id);

    const { movieDetail, movieImages, isLoading, isError, isUnvailableWatch } =
        useMoviePage();

    if (isLoading) {
        return (
            <div className={styles.page}>
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.backButtonWrap}>
                            <BackButton />
                        </div>
                        <div className={styles.heroContent}>
                            <MoviePosterSkeleton />
                            <MovieInfoSkeleton />
                        </div>
                    </div>
                </section>
                <ImageGallerySkeleton />
            </div>
        );
    }

    if (isError || !movieDetail) return <div>Ошибка</div>;

    const { posterUrl, coverUrl, nameRu, ratingKinopoisk } = movieDetail;
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div
                    className={styles.heroBg}
                    style={{ backgroundImage: `url(${coverUrl ?? posterUrl})` }}
                />
                <div className="container">
                    <div className={styles.backButtonWrap}>
                        <BackButton />
                    </div>
                    <div className={styles.heroContent}>
                        <div className={styles.posterColumn}>
                            <MoviePoster
                                image={coverUrl ?? posterUrl}
                                title={nameRu}
                                posterSize="poster"
                                rating={ratingKinopoisk}
                                showPlayOverlay={false}
                            />
                        </div>
                        <MovieInfo
                            movie={movieDetail}
                            renderActions={
                                <>
                                    <WatchMovieButton
                                        id={movieDetail.kinopoiskId}
                                        disabled={isUnvailableWatch}
                                    />
                                    <AddToFavoritesButton movie={movieDetail} />
                                </>
                            }
                        />
                    </div>
                </div>
            </section>

            <ImageGallery images={movieImages} />
        </div>
    );
};
