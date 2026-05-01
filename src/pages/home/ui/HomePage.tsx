import { HeroBanner } from "@/widgets/featuredFilm";
import { MediaRail } from "@/widgets/mediaRail";
import { useGetMoviesQuery } from "@/entities/title";
import { CollectionType } from "@/entities/title";
import styles from "./HomePage.module.scss";
import { useFeaturedTitle } from "../model/hooks/useFeaturedTitle";

export const HomePage = () => {
    const { data: popularMovies } = useGetMoviesQuery(
        CollectionType.POPULAR_MOVIES,
    );
    const { data: popularSeries } = useGetMoviesQuery(
        CollectionType.POPULAR_SERIES,
    );
    const { data: topMovies } = useGetMoviesQuery(
        CollectionType.TOP_250_MOVIES,
    );

    const allTitles = [
        ...(popularMovies?.items ?? []),
        ...(popularSeries?.items ?? []),
        ...(topMovies?.items ?? []),
    ];

    const isLoadedTitles = !!popularMovies && !!popularSeries && !!topMovies;
    const featuredTitle = useFeaturedTitle(isLoadedTitles ? allTitles : []);

    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.layout}>

                    {/* СЮДЫ НАВРЕНОЕ СКЕЛЕТОН */}
                    
                    {featuredTitle && <HeroBanner title={featuredTitle} />}
                    <MediaRail
                        label="Популярные фильмы"
                        data={popularMovies?.items ?? []}
                    />
                    {/* <MediaRail
                        label="Популярные сериалы"
                        data={popularSeries?.items ?? []}
                    />
                    <MediaRail label="Топ 250" data={topMovies?.items ?? []} /> */}
                </div>
            </div>
        </div>
    );
};
