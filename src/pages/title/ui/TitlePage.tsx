import { ImageGallery } from "@/widgets/imageGallery";
import { TitlePoster, TitleInfo } from "@/entities/title";
import { useTitlePage } from "../hooks/useTitlePage";
import styles from "./TitlePage.module.scss";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import { useParams } from "react-router";

export const TitlePage = () => {
    const { id } = useParams();
    useScrollToTop(id);

    const { movieDetail, movieImages, isLoading, isError } = useTitlePage();

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
                        <TitleInfo title={movieDetail} />
                    </div>
                </div>
            </section>

            <ImageGallery images={movieImages} />
        </div>
    );
};
