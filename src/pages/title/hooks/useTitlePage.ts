import { useParams } from "react-router";
import { useGetMovieByIdQuery, useGetMovieImagesQuery } from "@/entities/title";

export const useTitlePage = () => {
    const { id } = useParams();
    const numberId = Number(id);

    const {
        data: movieDetail,
        isLoading,
        isError,
    } = useGetMovieByIdQuery(numberId);

    const { data: movieImages } = useGetMovieImagesQuery(numberId);

    return {
        movieDetail,
        movieImages: movieImages?.items ?? [],
        isLoading,
        isError,
    };
};
