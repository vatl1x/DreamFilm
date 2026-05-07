import { Title } from "@/entities/title";

let cachedTitle: Title | null = null;

export const useFeaturedTitle = (titles: Title[]) => {
    if (titles.length && !cachedTitle) {
        const randomIndex = Math.floor(Math.random() * titles.length);
        cachedTitle = titles[randomIndex];
    }

    return cachedTitle;
};
