import { Link } from "react-router";
import styles from "./Logo.module.scss";

interface Props {
    withLink?: boolean;
}
export const Logo = ({ withLink = true }: Props) => {
    const content = (
        <>
            <span className={`${styles.fullText} ${styles.red}`}>Dream</span>
            <span className={`${styles.shortText} ${styles.red}`}>D</span>

            <span className={styles.fullText}>Film</span>
            <span className={styles.shortText}>F</span>

        </>
    );
    return (
        <>
            {withLink ? (
                <Link to="/" className={`${styles.logo} ${styles.logoLink}`}>
                    {content}
                </Link>
            ) : (
                <div className={styles.logo}>{content}</div>
            )}
        </>
    );
};
