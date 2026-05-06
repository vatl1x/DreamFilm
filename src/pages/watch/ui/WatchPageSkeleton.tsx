import { BackButton } from "@/shared/ui/BackButton/BackButton";
import styles from "./WatchPage.module.scss";

export const WatchPageSkeleton = () => {
    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.header}>
                    <BackButton />
                    <div className={styles.titleSkeleton} />
                </div>

                <div className={styles.playerWrap}>
                    <div className={styles.playerSkeleton} />
                </div>
            </div>
        </div>
    );
};
