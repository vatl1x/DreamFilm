import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WATCH_API_URL } from "../config/api";

export const watchApi = createApi({
    reducerPath: "watchApi",
    baseQuery: fetchBaseQuery({ baseUrl: WATCH_API_URL }),
    endpoints: () => ({}),
});