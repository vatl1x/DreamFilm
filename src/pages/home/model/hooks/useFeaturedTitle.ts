import { useRef } from "react";
import { Title } from "@/entities/title";

export const useFeaturedTitle = (titles: Title[]) => {
    const cachedTitle = useRef<Title | null>(null);
    if (titles.length && !cachedTitle.current) {
        const randomIndex = Math.floor(Math.random() * titles.length);
        cachedTitle.current = titles[randomIndex];
    }

    return cachedTitle.current;
};
