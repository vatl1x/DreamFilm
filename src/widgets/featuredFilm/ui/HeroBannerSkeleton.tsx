import { Skeleton } from "@/shared/ui";
import styles from "./HeroBannerSkeleton.module.scss";

export const HeroBannerSkeleton = () => {
    return (
        <section className={styles.heroBanner}>
            <Skeleton className={styles.janreName} />
            <Skeleton className={styles.filmsName} />

            <ul className={styles.dataTablets}>
                {[...Array(3)].map((_, ind) => (
                    <li key={ind}>
                        <Skeleton className={styles.pill} />
                    </li>
                ))}
            </ul>

            {[...Array(3)].map((_, ind) => (
                <Skeleton key={ind} className={styles.descLine} />
            ))}

            <ul className={styles.actionsButtons}>
                <li>
                    <Skeleton className={styles.btnWatch} />
                </li>
                <li>
                    <Skeleton className={styles.btnDetail} />
                </li>
                <li>
                    <Skeleton className={styles.btnFavorite} />
                </li>
            </ul>
        </section>
    );
};
