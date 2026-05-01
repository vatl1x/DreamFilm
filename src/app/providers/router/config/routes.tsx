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
                path: PATHS.TITLE,
                lazy: async () => {
                    const { TitlePage } = await import("@/pages/title");
                    return { Component: TitlePage };
                },
            },
            {
                path: PATHS.WATCH,
                lazy: async () => {
                    const { WatchPage } = await import("@/pages/watch");
                    return { Component: WatchPage };
                },
            },
            // ,
            // {
            //     path: '/AuthPage',
            //     lazy: async ()=>{
            //         const {}
            //     }
            // },
            // {
            //     path: '/MovieDetailsPage',
            //     lazy: async ()=>{
            //         const {}
            //     }
            // },
            // {
            //     path: '/WathPage',
            //     lazy: async ()=>{
            //         const {}
            //     }
            // },{
            //     path: '/SettingsPage',
            //     lazy: async ()=>{
            //         const {}
            //     }
            // }
        ],
    },
]);
