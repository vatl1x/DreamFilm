import { Link, useRouteError } from "react-router";
import styles from "./ErrorPage.module.scss";

export const ErrorPage = () => {
    const error = useRouteError() as Error;

    return (
        <div className={styles.layout}>
            <span className={styles.errorCode}>404</span>
            <h2 className={styles.errorTitle}>Ой, что-то сломалось</h2>
            <p className={styles.errorMessage}>
                {error?.message || "Уже стараемся починить"}
            </p>
            <Link to="/" className={styles.backLink}>
                На главную
            </Link>
        </div>
    );
};