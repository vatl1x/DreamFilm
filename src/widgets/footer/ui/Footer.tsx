import { Logo } from "@/shared/ui";
import { MailIcon, socialItems } from "../constants";
import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brandBlock}>
                        <Logo withLink={false} />

                        <p className={styles.description}>
                            Стриминговый сервис для ценителей кино и сериалов.
                            Данные о тайтлах подгружаются через Kinopoisk API
                            Unofficial.
                        </p>

                        <ul className={styles.socialList}>
                            {socialItems.map((item) => (
                                <li key={item.label}>
                                    <a
                                        className={styles.socialLink}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={item.label}
                                    >
                                        {item.icon ?? item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.contactBlock}>
                        <h3 className={styles.blockTitle}>Контакты</h3>

                        <a
                            className={styles.contactLink}
                            href="mailto:support@dreamfilm.dev"
                        >
                            <span className={styles.mailIcon}>
                                <MailIcon width={20} height={20} />
                            </span>
                            <span>support@dreamfilm.dev</span>
                        </a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copy}>© 2026 DreamFilm. 18+</p>
                </div>
            </div>
        </footer>
    );
};
