import styles from "./MoviePosterSkeleton.module.scss";

export const MoviePosterSkeleton = () => {
    return (
        <div className={styles.poster}>
            <div className={styles.image} />
            <div className={styles.rating} />
        </div>
    );
};