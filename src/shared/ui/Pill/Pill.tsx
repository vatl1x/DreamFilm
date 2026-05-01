import clsx from "clsx";
import styles from "./Pill.module.scss";

interface Props {
    children: React.ReactNode;
    variant?: "default" | "gold" | "green" | "orange" | "red";
    className?: string;
}

export const Pill = ({
    children,
    variant = "default",
    className,
}: Props) => {
    return (
        <span className={clsx(styles.pill, styles[variant], className)}>
            {children}
        </span>
    );
};
