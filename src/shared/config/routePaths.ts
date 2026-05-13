import { CollectionType } from "@/entities/movie/model/types";

export const PATHS = {
    HOME: "/",
    MOVIE: "movie/:id",
    WATCH: "watch/:id",
    COLLECTION: "collection/:collection",
    FAVORITES: "favorites",
} as const;

export const routePaths = {
    movie: (id: string | number) => `/movie/${id}`,
    watch: (id: string | number) => `/watch/${id}`,
    collection: (collection: CollectionType) => `/collection/${collection}`,
} as const;
