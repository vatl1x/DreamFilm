import { Skeleton } from "@/shared/ui";
import styles from "./TitleCardSkeleton.module.scss";

export const TitleCardSkeleton = () => {
    return (
        <div className={styles.card}>
            <Skeleton className={styles.poster} />

            <div className={styles.filmInfo}>
                <Skeleton className={styles.title} />
                <Skeleton className={styles.description} />
            </div>
        </div>
    );
};
