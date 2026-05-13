import { useParams } from "react-router";
import { useGetMovieByIdQuery, useGetMovieImagesQuery } from "@/entities/movie";
import { useGetMovieIframeQuery } from "@/entities/movie";

export const useMoviePage = () => {
    const { id } = useParams();
    const numberId = Number(id);

    const {
        data: movieDetail,
        isLoading,
        isError,
    } = useGetMovieByIdQuery(numberId);

    const { data: movieImages } = useGetMovieImagesQuery(numberId);

    const { isError: isUnvailableWatch } = useGetMovieIframeQuery(numberId);

    return {
        movieDetail,
        movieImages: movieImages?.items ?? [],
        isLoading,
        isError,
        isUnvailableWatch,
    };
};
