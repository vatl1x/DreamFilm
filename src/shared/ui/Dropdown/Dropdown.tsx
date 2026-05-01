import styles from "./Dropdown.module.scss";

interface Props {
    isOpen: boolean;
    children: React.ReactNode;
}

export const Dropdown = ({ isOpen, children }: Props) => {
    if (!isOpen) return null;

    return <div className={styles.dropdown}>{children}</div>;
};
