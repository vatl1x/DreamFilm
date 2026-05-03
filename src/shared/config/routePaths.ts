import { CollectionType } from "@/entities/title/model/types";

export const PATHS = {
    HOME: "/",
    TITLE: "title/:id",
    WATCH: "watch/:id",
    COLLECTION: "collection/:collection",
} as const;

export const routePaths = {
    title: (id: string | number) => `/title/${id}`,
    watch: (id: string | number) => `/watch/${id}`,
    collection: (collection: CollectionType) => `/collection/${collection}`,
} as const;
