import { useGetMovieIframeQuery } from "@/entities/movie";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import { BackButton } from "@/shared/ui";
import { useParams } from "react-router";
import styles from "./WatchPage.module.scss";
import { WatchPageSkeleton } from "./WatchPageSkeleton";

export const WatchPage = () => {
    const { id } = useParams();
    useScrollToTop(id);

    const { data, isLoading, isError } = useGetMovieIframeQuery(Number(id));

    if (isLoading) return <WatchPageSkeleton />;
    if (isError || !data) return <div>Видео недоступно</div>;

    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.header}>
                    <BackButton />
                    <h1 className={styles.title}>
                        {`${data.title} (${data.year})`}
                    </h1>
                </div>
                <div className={styles.playerWrap}>
                    <iframe
                        src={data.iframeUrl}
                        className={styles.player}
                        allowFullScreen
                        title={`Просмотр ${data.title}`}
                    />
                </div>
            </div>
        </div>
    );
};
