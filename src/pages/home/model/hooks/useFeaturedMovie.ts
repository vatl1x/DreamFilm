import { useRef } from "react";
import { Movie } from "@/entities/movie";

export const useFeaturedMovie = (movies: Movie[]) => {
    const cachedMovie = useRef<Movie | null>(null);
    if (movies.length && !cachedMovie.current) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        cachedMovie.current = movies[randomIndex];
    }

    return cachedMovie.current;
};
