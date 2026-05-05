import { baseApi } from "@/shared/api/baseApi";
import { watchApi } from "@/shared/api/watchApi";
import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "@/entities/favorites/model/favoritesSlice";

export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [watchApi.reducerPath]: watchApi.reducer,
    favorites: favoritesReducer,
});
