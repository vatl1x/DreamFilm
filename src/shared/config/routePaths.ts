export const PATHS = {
    HOME: "/",
    TITLE: "title/:id",
    WATCH: "watch/:id",
} as const;

export const routePaths = {
    title: (id: string | number) => `/title/${id}`,
    watch: (id: string | number) => `/watch/${id}`,
} as const;
