import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducer";
import { baseApi } from "@/shared/api/baseApi";
import { watchApi } from "@/shared/api/watchApi";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware, watchApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
