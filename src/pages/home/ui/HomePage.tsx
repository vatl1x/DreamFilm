import { HeroBanner, HeroBannerSkeleton } from "@/widgets/featuredFilm";
import { MediaRail } from "@/widgets/mediaRail";
import { useGetMoviesQuery, CollectionType } from "@/entities/movie";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import { useFeaturedMovie } from "../model/hooks/useFeaturedMovie";
import { withSkeleton } from "@/shared/lib/hocs/withSkeleton";
import { MediaRailSkeleton } from "@/widgets/mediaRail";
import styles from "./HomePage.module.scss";

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

    const allMovies = [
        ...(popularMovies?.items ?? []),
        ...(popularSeries?.items ?? []),
        ...(topMovies?.items ?? []),
    ];

    const isLoadedMovies = !!popularMovies && !!popularSeries && !!topMovies;
    const featuredMovie = useFeaturedMovie(isLoadedMovies ? allMovies : []);

    useScrollToTop();

    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.layout}>
                    {isLoading ? (
                        <HeroBannerSkeleton />
                    ) : (
                        featuredMovie && <HeroBanner movie={featuredMovie} />
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
