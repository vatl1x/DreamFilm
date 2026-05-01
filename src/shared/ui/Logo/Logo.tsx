import { Link } from "react-router";
import styles from "./Logo.module.scss";

interface Props {
    withLink?: boolean;
}
export const Logo = ({ withLink = true }: Props) => {
    const content = (
        <>
            <span className={styles.redText}>Dream</span>
            <span>Film</span>
        </>
    );
    return (
        <>
            {withLink ? (
                <Link to="/" className={styles.logo}>
                    {content}
                </Link>
            ) : (
                <div className={styles.logo}>{content}</div>
            )}
        </>
    );
};
