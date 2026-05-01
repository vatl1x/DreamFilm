export interface Title {
    kinopoiskId: number;
    nameRu: string;
    nameEn: string | null;
    nameOriginal: string;
    countries: {
        country: string;
    }[];
    genres: {
        genre: string;
    }[];
    ratingKinopoisk: number | null;
    ratingImdb: number | null;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl: string | null;
    logoUrl: string | null;
    description: string;
    ratingAgeLimits: string | null;
}

export interface TitlesResponse {
    total: number;
    totalPages: number;
    items: Title[];
}

export interface TitleDetail {
    kinopoiskId: number;
    nameRu: string;
    nameEn: string | null;
    posterUrl: string;
    coverUrl: string | null;
    ratingKinopoisk: number | null;
    year: number;
    filmLength: number | null;
    description: string | null;
    // type: string;
    ratingAgeLimits: string | null;
    countries: { country: string }[];
    genres: {
        genre: string;
    }[];
    shortDescription: string;
}

export interface TitleImage {
    imageUrl: string;
    previewUrl: string;
}

export interface TitleImageResponse {
    total: number;
    totalPages: number;
    items: TitleImage[];
}

export const CollectionType = {
    POPULAR_MOVIES: "TOP_POPULAR_MOVIES",
    POPULAR_SERIES: "POPULAR_SERIES",
    TOP_250_MOVIES: "TOP_250_MOVIES",
    TOP_250_SERIES: "TOP_250_TV_SHOWS",
} as const;

export type CollectionType =
    (typeof CollectionType)[keyof typeof CollectionType];
