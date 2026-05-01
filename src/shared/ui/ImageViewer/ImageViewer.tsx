import { useEffect } from "react";
import styles from "./ImageViewer.module.scss";

interface Props {
    image: string;
    onClose: () => void;
}

export const ImageViewer = ({ image, onClose }: Props) => {
    useEffect(() => {
        if (!image) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [image]);

    return (
        <div className={styles.viewerOverlay} onClick={onClose}>
            <div
                className={styles.viewerContent}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className={styles.viewerClose}
                    onClick={onClose}
                    aria-label="Закрыть изображение"
                >
                    ×
                </button>

                <img
                    className={styles.viewerImage}
                    src={image}
                    alt="Кадр из фильма"
                />
            </div>
        </div>
    );
};
