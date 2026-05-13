import { Skeleton } from "@/shared/ui";
import styles from "./MovieCardSkeleton.module.scss";

export const MovieCardSkeleton = () => {
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
