import { useParams } from "react-router";
import { useGetMovieByIdQuery, useGetMovieImagesQuery } from "@/entities/title";
import { useGetMovieIframeQuery } from "@/entities/watch-title";

export const useTitlePage = () => {
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
