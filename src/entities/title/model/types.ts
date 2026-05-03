import { CollectionType } from "./constants";

export interface Title {
    kinopoiskId: number;
    nameRu: string;
    nameEn: string | null;
    nameOriginal: string;
    countries: Country[];
    genres: Genre[];
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

export interface TitlesParams {
    collection: CollectionType;
    page: number;
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
    genres: Genre[];
    shortDescription: string;
}

export interface TitleSearch {
    filmId: number;
    nameRu: string;
    year: string;
    rating: string | null;
    genres: Genre[];
    posterUrl: string;
}

export interface TitleSearchResponse {
    keyword: string;
    pagesCount: number;
    searchFilmsCountResult: number;
    films: TitleSearch[];
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



export type CollectionType =
    (typeof CollectionType)[keyof typeof CollectionType];

export interface Genre {
    genre: string;
}

export interface Country {
    country: string;
}
