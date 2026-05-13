import {
    useAppDispatch,
    useAppSelector,
} from "@/app/providers/store/config/hooks";
import {
    addFavorite,
    removeFavorite,
    selectIsFavorite,
} from "@/entities/favorites";
import { Movie, MovieDetail } from "@/entities/movie/model/types";
import plusBtn from "@/shared/assets/icons/plus.svg";
import checkmarkBtn from "@/shared/assets/icons/checkmark.svg";
import styles from "./AddToFavoritesButton.module.scss";
import clsx from "clsx";

interface Props {
    movie: Movie | MovieDetail;
}

export const AddToFavoritesButton = ({ movie }: Props) => {
    const dispatch = useAppDispatch();
    const isAdded = useAppSelector(selectIsFavorite(movie.kinopoiskId));

    return (
        <button
            type="button"
            className={clsx(
                styles.iconButton,
                isAdded && styles.iconButtonActive,
            )}
            onClick={() => {
                if (isAdded) {
                    dispatch(removeFavorite(movie.kinopoiskId));
                } else {
                    dispatch(addFavorite(movie));
                }
            }}
            aria-label={
                isAdded ? "Удалить из избранного" : "Добавить в избранное"
            }
        >
            <img
                src={isAdded ? checkmarkBtn : plusBtn}
                alt=""
                width={22}
                height={22}
            />
        </button>
    );
};
