import clsx from "clsx";
import styles from "./Skeleton.module.scss";

interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export const Skeleton = ({ className, style }: Props) => {
    return <div className={clsx(styles.skeleton, className)} style={style} />;
};
