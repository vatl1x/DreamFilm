import { CollectionType } from "@/entities/title/model/types";
import { CollectionLabel, TitleCard } from "@/entities/title";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import { useCollectionPage } from "../model/hooks/useCollectionPage";
import styles from "./CollectionPage.module.scss";

export const CollectionPage = () => {
    const { collection, allTitles, isFetching, lastItemRef } =
        useCollectionPage();

    useScrollToTop();

    return (
        <div className={styles.page}>
            <div className="container">
                <h2 className={styles.collectionName}>
                    {CollectionLabel[collection as CollectionType] ??
                        collection}
                </h2>
                <ul className={styles.collectionList}>
                    {allTitles.map((title, index) => (
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
                {isFetching && <div>Загрузка</div>}
            </div>
        </div>
    );
};
