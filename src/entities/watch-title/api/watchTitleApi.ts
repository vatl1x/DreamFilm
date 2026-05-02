import { watchApi } from "@/shared/api/watchApi";
import { WatchResponse } from "../model/types";

export const watchTitleApi = watchApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovieIframe: builder.query<WatchResponse, number>({
            query: (kpId) => ({
                url: `/watch/${kpId}`,
            }),
        }),
    }),
});

export const { useGetMovieIframeQuery } = watchTitleApi;
