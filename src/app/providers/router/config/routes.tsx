import { BaseLayout } from "@/app/layouts/BaseLayout";
import { ErrorPage } from "@/pages/error";
import { HomePage } from "@/pages/home";
import { PATHS } from "@/shared/config/routePaths";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <BaseLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: PATHS.MOVIE,
                lazy: async () => {
                    const { MoviePage } = await import("@/pages/movie");
                    return { Component: MoviePage };
                },
            },
            {
                path: PATHS.WATCH,
                lazy: async () => {
                    const { WatchPage } = await import("@/pages/watch");
                    return { Component: WatchPage };
                },
            },
            {
                path: PATHS.COLLECTION,
                lazy: async () => {
                    const { CollectionPage } =
                        await import("@/pages/collection");
                    return { Component: CollectionPage };
                },
            },
            {
                path: PATHS.FAVORITES,
                lazy: async () => {
                    const { FavoritesPage } = await import("@/pages/favorites");
                    return { Component: FavoritesPage };
                },
            },
        ],
    },
]);
