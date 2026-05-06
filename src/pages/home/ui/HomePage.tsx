import { HeroBanner, HeroBannerSkeleton } from "@/widgets/featuredFilm";
import { MediaRail } from "@/widgets/mediaRail";
import { useGetMoviesQuery } from "@/entities/title";
import { CollectionType } from "@/entities/title";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import { useFeaturedTitle } from "../model/hooks/useFeaturedTitle";
import styles from "./HomePage.module.scss";
import { withSkeleton } from "@/shared/lib/hocs/withSkeleton";
import { MediaRailSkeleton } from "@/widgets/mediaRail";

const MediaRailWithSkeleton = withSkeleton(MediaRail, MediaRailSkeleton);

export const HomePage = () => {
    const { data: popularMovies, isLoading: isLoadingMovies } =
        useGetMoviesQuery({
            collection: CollectionType.POPULAR_MOVIES,
            page: 1,
        });
    const { data: popularSeries, isLoading: isLoadingShows } =
        useGetMoviesQuery({
            collection: CollectionType.POPULAR_SERIES,
            page: 1,
        });
    const { data: topMovies, isLoading: isLoadingTop } = useGetMoviesQuery({
        collection: CollectionType.TOP_250_MOVIES,
        page: 1,
    });
    const isLoading = isLoadingMovies || isLoadingShows || isLoadingTop;

    const allTitles = [
        ...(popularMovies?.items ?? []),
        ...(popularSeries?.items ?? []),
        ...(topMovies?.items ?? []),
    ];

    const isLoadedTitles = !!popularMovies && !!popularSeries && !!topMovies;
    const featuredTitle = useFeaturedTitle(isLoadedTitles ? allTitles : []);

    useScrollToTop();

    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.layout}>

                    {isLoading ? (
                        <HeroBannerSkeleton />
                    ) : (
                        featuredTitle && <HeroBanner title={featuredTitle} />
                    )}
                    <MediaRailWithSkeleton
                        isLoading={isLoading}
                        label="Популярные фильмы"
                        data={popularMovies?.items ?? []}
                        collectionType={CollectionType.POPULAR_MOVIES}
                    />
                    <MediaRailWithSkeleton
                        isLoading={isLoading}
                        label="Популярные сериалы"
                        data={popularSeries?.items ?? []}
                        collectionType={CollectionType.POPULAR_SERIES}
                    />
                    <MediaRailWithSkeleton
                        isLoading={isLoading}
                        label="Топ 250"
                        data={topMovies?.items ?? []}
                        collectionType={CollectionType.TOP_250_MOVIES}
                    />
                </div>
            </div>
        </div>
    );
};
