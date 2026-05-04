import { Logo } from "@/shared/ui/Logo/Logo";
import { SearchTitle } from "@/features/search-title";
import { FavoritesMenu } from "@/features/favorites-menu";
import styles from "./Header.module.scss";

export const Header = () => (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.headerContent}>
                <div className={styles.headerLogo}>
                    <Logo />
                </div>
                <div className={styles.headerActions}>
                    <SearchTitle />
                    <FavoritesMenu />
                </div>
            </div>
        </div>
    </header>
);
