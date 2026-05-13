import { baseApi } from "@/shared/api/baseApi";
import {
    MoviesResponse,
    MovieDetail,
    MovieImageResponse,
    MovieSearchResponse,
    MoviesParams,
} from "../model/types";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query<MoviesResponse, MoviesParams>({
            query: ({ collection, page }) => ({
                url: "/v2.2/films/collections",
                params: {
                    type: collection,
                    page,
                },
            }),
        }),
        getMovieById: builder.query<MovieDetail, number>({
            query: (id) => ({
                url: `/v2.2/films/${id}`,
            }),
        }),
        getMovieImages: builder.query<MovieImageResponse, number>({
            query: (id) => ({
                url: `/v2.2/films/${id}/images`,
            }),
        }),
        getMoviesByKeywords: builder.query<MovieSearchResponse, string>({
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
} = moviesApi;
