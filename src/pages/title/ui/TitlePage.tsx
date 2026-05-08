import { useParams } from "react-router";
import { ImageGallery, ImageGallerySkeleton } from "@/widgets/imageGallery";
import {
    TitlePoster,
    TitleInfo,
    TitlePosterSkeleton,
    TitleInfoSkeleton,
} from "@/entities/title";
import { useTitlePage } from "../model/hooks/useTitlePage";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import { BackButton } from "@/shared/ui/";
import styles from "./TitlePage.module.scss";
import { WatchTitleButton } from "@/features/watch-title";
import { AddToFavoritesButton } from "@/features/add-to-favorite";

export const TitlePage = () => {
    const { id } = useParams();
    useScrollToTop(id);

    const { movieDetail, movieImages, isLoading, isError, isUnvailableWatch } =
        useTitlePage();

    if (isLoading) {
        return (
            <div className={styles.page}>
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.backButtonWrap}>
                            <BackButton />
                        </div>
                        <div className={styles.heroContent}>
                            <TitlePosterSkeleton />
                            <TitleInfoSkeleton />
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
                            <TitlePoster
                                image={coverUrl ?? posterUrl}
                                title={nameRu}
                                posterSize="poster"
                                rating={ratingKinopoisk}
                                showPlayOverlay={false}
                            />
                        </div>
                        <TitleInfo
                            title={movieDetail}
                            renderActions={
                                <>
                                    <WatchTitleButton
                                        id={movieDetail.kinopoiskId}
                                        disabled={isUnvailableWatch}
                                    />
                                    <AddToFavoritesButton title={movieDetail} />
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
