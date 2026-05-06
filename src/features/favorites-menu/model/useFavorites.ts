import {
    useAppDispatch,
    useAppSelector,
} from "@/app/providers/store/config/hooks";
import { selectFavorites, removeFavorite } from "@/entities/favorites";

export const useFavorites = () => {
    const dispatch = useAppDispatch();

    const favorites = useAppSelector(selectFavorites);

    const remove = (id: number) => {
        dispatch(removeFavorite(id));
    };

    return { favorites, remove };
};
