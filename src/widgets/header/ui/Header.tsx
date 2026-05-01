import { Logo } from "@/shared/ui/Logo/Logo";
import styles from "./Header.module.scss";
import { SearchTitle } from "@/features/search-title";

export const Header = () => (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.headerContent}>
                <div className={styles.headerLogo}>
                    <Logo />
                </div>
                <div className={styles.headerActions}>
                    <SearchTitle />
                </div>
            </div>
        </div>
    </header>
);
