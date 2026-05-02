import { baseApi } from "@/shared/api/baseApi";
import {
    TitlesResponse,
    CollectionType,
    TitleDetail,
    TitleImageResponse,
    TitleSearchResponse,
} from "../model/types";

export const titlesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query<TitlesResponse, CollectionType>({
            query: (collection) => ({
                url: "/v2.2/films/collections",
                params: {
                    type: collection,
                    page: 1,
                },
            }),
        }),
        getMovieById: builder.query<TitleDetail, number>({
            query: (id) => ({
                url: `/v2.2/films/${id}`,
            }),
        }),
        getMovieImages: builder.query<TitleImageResponse, number>({
            query: (id) => ({
                url: `/v2.2/films/${id}/images`,
            }),
        }),
        getMoviesByKeywords: builder.query<TitleSearchResponse, string>({
            query: (keyword) => ({
                url: `/v2.1/films/search-by-keyword`,
                params: { keyword },
            }),
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieByIdQuery,
    useGetMovieImagesQuery,
    useGetMoviesByKeywordsQuery,
} = titlesApi;
