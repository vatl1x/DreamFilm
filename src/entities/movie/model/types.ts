import { CollectionType } from "./constants";

export interface Movie {
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

export interface MoviesResponse {
    total: number;
    totalPages: number;
    items: Movie[];
}

export interface MoviesParams {
    collection: CollectionType;
    page: number;
}

export interface MovieDetail {
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

export interface MovieSearch {
    filmId: number;
    nameRu: string;
    year: string;
    rating: string | null;
    genres: Genre[];
    posterUrl: string;
}

export interface MovieSearchResponse {
    keyword: string;
    pagesCount: number;
    searchFilmsCountResult: number;
    films: MovieSearch[];
}

export interface MovieImage {
    imageUrl: string;
    previewUrl: string;
}

export interface MovieImageResponse {
    total: number;
    totalPages: number;
    items: MovieImage[];
}

export type CollectionType =
    (typeof CollectionType)[keyof typeof CollectionType];

export interface Genre {
    genre: string;
}

export interface Country {
    country: string;
}

export interface WatchResponse {
    kpId: string;
    title: string;
    year: number;
    iframeUrl: string;
}
