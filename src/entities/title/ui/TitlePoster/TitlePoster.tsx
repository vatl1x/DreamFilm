import { Pill } from "@/shared/ui";
import { getRatingVariant } from "@/shared/lib/helpers/getRatingVariant";
import playIcon from "@/shared/assets/icons/play.svg";
import altImage from '@/shared/assets/icons/no-poster.svg'
import styles from "./TitlePoster.module.scss";
import clsx from "clsx";

interface Props {
    image: string | null;
    title: string;
    rating: number | null;
    showPlayOverlay: boolean;
    posterSize: "card" | "poster";
}

export const TitlePoster = ({
    image,
    title,
    rating,
    showPlayOverlay,
    posterSize,
}: Props) => {
    return (
        <div
            className={clsx(
                styles.posterWrap,
                posterSize === "card" && styles.posterWrapCard,
                posterSize === "poster" && styles.posterWrapPoster,
            )}
        >
            <img className={styles.filmImage} src={image ? image : altImage} alt={title} />

            {rating !== null && (
                <Pill
                    variant={getRatingVariant(rating)}
                    className={styles.rating}
                >
                    {rating.toFixed(1)}
                </Pill>
            )}

            {showPlayOverlay && (
                <div className={styles.playOverlay}>
                    <div className={styles.playBadge}>
                        <img src={playIcon} alt="" width={18} height={18} />
                    </div>
                </div>
            )}
        </div>
    );
};
