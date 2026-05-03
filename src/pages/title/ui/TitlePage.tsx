import { ImageGallery } from "@/widgets/imageGallery";
import { TitlePoster, TitleInfo } from "@/entities/title";
import { useTitlePage } from "../model/hooks/useTitlePage";
import styles from "./TitlePage.module.scss";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import { useParams } from "react-router";
import { BackButton } from "@/shared/ui/BackButton/BackButton";

export const TitlePage = () => {
    const { id } = useParams();
    useScrollToTop(id);

    const { movieDetail, movieImages, isLoading, isError, isUnvailableWatch } =
        useTitlePage();

    if (isLoading) return <div>Загрузка...</div>;
    if (isError || !movieDetail) return <div>Ошибка</div>;

    const { posterUrl, coverUrl, nameRu, ratingKinopoisk } = movieDetail;
    return (
        <div className={styles.page}>
            <section
                className={styles.hero}
                style={{ backgroundImage: `url(${coverUrl ?? posterUrl})` }}
            >
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
                            isUnvailableWatch={isUnvailableWatch}
                        />
                    </div>
                </div>
            </section>

            <ImageGallery images={movieImages} />
        </div>
    );
};
