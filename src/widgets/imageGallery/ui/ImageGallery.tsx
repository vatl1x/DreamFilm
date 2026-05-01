import { useState } from "react";
import { TitleImage } from "@/entities/title/model/types";
import { useScrollControls } from "@/shared/lib/hooks/useScrollControls";
import { ImageViewer } from "@/shared/ui/ImageViewer";
import ArrowIcon from "@/shared/assets/icons/arrow-left.svg?react";
import emptyImage from "@/shared/assets/icons/no-poster.svg";
import styles from "./ImageGallery.module.scss";

interface Props {
    images: TitleImage[];
}

export const ImageGallery = ({ images }: Props) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const {
        ref,
        canScrollLeft,
        canScrollRight,
        handleScrollLeft,
        handleScrollRight,
        updateScrollState,
    } = useScrollControls(420);

    return (
        <>
            <section className={styles.gallerySection}>
                <div className="container">
                    <div className={styles.galleryBlock}>
                        <div className={styles.galleryHeader}>
                            <span className={styles.sectionLabel}>
                                Кадры из фильма
                            </span>
                        </div>

                        <div className={styles.galleryShell}>
                            <button
                                type="button"
                                className={`${styles.arrowButton} ${styles.arrowLeft} ${
                                    !canScrollLeft ? styles.arrowHidden : ""
                                }`}
                                onClick={handleScrollLeft}
                                aria-label="Прокрутить кадры влево"
                            >
                                <span className={styles.arrowIcon}>
                                    <ArrowIcon width={22} height={22} />
                                </span>
                            </button>

                            <div
                                className={styles.galleryViewport}
                                ref={ref}
                                onScroll={updateScrollState}
                            >
                                <div className={styles.galleryTrack}>
                                    {images.length
                                        ? images.map(({ imageUrl }, index) => (
                                              <button
                                                  key={imageUrl}
                                                  type="button"
                                                  className={styles.galleryItem}
                                                  onClick={() =>
                                                      setSelectedImage(imageUrl)
                                                  }
                                              >
                                                  <img
                                                      className={
                                                          styles.galleryImage
                                                      }
                                                      src={imageUrl}
                                                      alt={`${imageUrl} кадр ${index + 1}`}
                                                  />
                                              </button>
                                          ))
                                        : [...Array(5)].map((_, index) => (
                                              <div
                                                  key={index}
                                                  className={styles.galleryItem}
                                              >
                                                  <img
                                                      className={
                                                          styles.galleryImage
                                                      }
                                                      src={emptyImage}
                                                      alt="Изображение пока не доступно"
                                                  />
                                              </div>
                                          ))}
                                </div>
                            </div>

                            <button
                                type="button"
                                className={`${styles.arrowButton} ${styles.arrowRight} ${
                                    !canScrollRight ? styles.arrowHidden : ""
                                }`}
                                onClick={handleScrollRight}
                                aria-label="Прокрутить кадры вправо"
                            >
                                <span
                                    className={`${styles.arrowIcon} ${styles.arrowIconRight}`}
                                >
                                    <ArrowIcon width={22} height={22} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {selectedImage && (
                <ImageViewer
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    );
};
