import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Movie, MovieDetail } from "@/entities/movie";

interface FavoriteSlice {
    items: (Movie | MovieDetail)[];
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: { items: [] } as FavoriteSlice,
    reducers: {
        addFavorite(state, action: PayloadAction<Movie | MovieDetail>) {
            const exist = state.items.some(
                (item) => item.kinopoiskId === action.payload.kinopoiskId,
            );
            if (!exist) {
                state.items.push(action.payload);
            }
        },
        removeFavorite(state, action: PayloadAction<number>) {
            state.items = state.items.filter(
                (item) => item.kinopoiskId !== action.payload,
            );
        },
    },
});
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = (state: { favorites: FavoriteSlice }) =>
    state.favorites.items;
export const selectIsFavorite =
    (id: number) => (state: { favorites: FavoriteSlice }) =>
        state.favorites.items.some((item) => item.kinopoiskId === id);

export default favoritesSlice.reducer;
