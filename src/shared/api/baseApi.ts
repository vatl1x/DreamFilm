import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, BASE_URL } from "../config/api";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set("X-API-KEY", API_KEY);
            return headers;
        },
    }),
    tagTypes: ["Movies", "MoviesByKeywords"],
    endpoints: () => ({}),
});
