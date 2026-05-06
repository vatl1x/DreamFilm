import { TitleCardSkeleton } from "@/entities/title";
import { Skeleton } from "@/shared/ui/Skeleton";
import styles from "./MediaRailSkeleton.module.scss";

const CARDS_COUNT = 7;

export const MediaRailSkeleton = () => {
    return (
        <section className={styles.mediaRail}>
            <div className={styles.railHeader}>
                <Skeleton className={styles.railLabel} />
                <Skeleton className={styles.viewAllLink} />
            </div>

            <div className={styles.railShell}>
                <ul className={styles.mediaList}>
                    {[...Array(CARDS_COUNT)].map((_, i) => (
                        <li key={i} className={styles.mediaItem}>
                            <TitleCardSkeleton />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
