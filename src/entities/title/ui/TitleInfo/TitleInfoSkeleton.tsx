import styles from "./TitleInfoSkeleton.module.scss";

export const TitleInfoSkeleton = () => {
    return (
        <div className={styles.infoColumn}>
            <div className={styles.headBlock}>
                <div className={styles.title} />
                <div className={styles.originalTitle} />
            </div>

            <div className={styles.metaList}>
                {[...Array(4)].map((_, ind) => (
                    <div key={ind} className={styles.pill} />
                ))}
            </div>

            <div className={styles.genresBlock}>
                <div className={styles.sectionLabel} />
                <div className={styles.genreList}>
                    {[...Array(3)].map((_, ind) => (
                        <div key={ind} className={styles.pill} />
                    ))}
                </div>
            </div>

            <div className={styles.descriptionBlock}>
                <div className={styles.sectionLabel} />
                {[...Array(2)].map((_, ind) => (
                    <div key={ind} className={styles.textLine} />
                ))}
                <div className={styles.textLineShort} />
            </div>

            <div className={styles.actions}>
                <div className={styles.watchButton} />
                <div className={styles.iconButton} />
            </div>
        </div>
    );
};
