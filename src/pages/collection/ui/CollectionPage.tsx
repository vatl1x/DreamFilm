import { CollectionType } from "@/entities/title/model/types";
import {
    CollectionLabel,
    TitleCard,
    TitleCardSkeleton,
} from "@/entities/title";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import { useCollectionPage } from "../model/hooks/useCollectionPage";
import dumpling from "@/shared/assets/icons/dumpling-loader.svg";
import styles from "./CollectionPage.module.scss";
export const CollectionPage = () => {
    const {
        collection,
        allTitles,
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
                                  <TitleCardSkeleton />
                              </li>
                          ))
                        : allTitles.map((title, index) => (
                              <li
                                  key={title.kinopoiskId}
                                  ref={
                                      index === allTitles.length - 1
                                          ? lastItemRef
                                          : null
                                  }
                                  className={styles.collectionItem}
                              >
                                  <TitleCard {...title} />
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
