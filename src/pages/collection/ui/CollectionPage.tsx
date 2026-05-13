import { CollectionType } from "@/entities/movie/model/types";
import {
    CollectionLabel,
    MovieCard,
    MovieCardSkeleton,
} from "@/entities/movie";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import { useCollectionPage } from "../model/hooks/useCollectionPage";
import dumpling from "@/shared/assets/icons/dumpling-loader.svg";
import styles from "./CollectionPage.module.scss";
export const CollectionPage = () => {
    const {
        collection,
        allMovies,
        lastItemRef,
        isInitialLoading,
        isFetchingMore,
    } = useCollectionPage();

    useScrollToTop();

    return (
        <div className={styles.page}>
            <div className="container">
                <h2 className={styles.collectionName}>
                    {CollectionLabel[collection as CollectionType] ??
                        collection}
                </h2>
                <ul className={styles.collectionList}>
                    {isInitialLoading
                        ? [...Array(10)].map((_, ind) => (
                              <li key={ind} className={styles.collectionItem}>
                                  <MovieCardSkeleton />
                              </li>
                          ))
                        : allMovies.map((movie, index) => (
                              <li
                                  key={movie.kinopoiskId}
                                  ref={
                                      index === allMovies.length - 1
                                          ? lastItemRef
                                          : null
                                  }
                                  className={styles.collectionItem}
                              >
                                  <MovieCard {...movie} />
                              </li>
                          ))}
                </ul>
                {isFetchingMore && (
                    <div className={styles.dumplingLoader}>
                        <img src={dumpling} alt="" width={60} height={60} />
                    </div>
                )}
            </div>
        </div>
    );
};
