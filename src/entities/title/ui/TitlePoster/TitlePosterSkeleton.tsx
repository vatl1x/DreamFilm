import styles from "./TitlePosterSkeleton.module.scss";

export const TitlePosterSkeleton = () => {
    return (
        <div className={styles.poster}>
            <div className={styles.image} />
            <div className={styles.rating} />
        </div>
    );
};