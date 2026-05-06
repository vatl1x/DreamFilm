import styles from "./ImageGallerySkeleton.module.scss";

export const ImageGallerySkeleton = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.title} />

            <div className={styles.row}>
                {[...Array(5)].map((_, ind) => (
                    <div key={ind} className={styles.item} />
                ))}
            </div>
        </div>
    );
};
