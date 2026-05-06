import { useRef } from "react";
import { useClickOutside } from "@/shared/lib/hooks/useClickOutside";
import { useDisclosure } from "@/shared/lib/hooks/useDisclosure";
import { useFavorites } from "./useFavorites";

export const useFavoritesMenu = () => {
    const { favorites, remove } = useFavorites();
    const { isOpen, toggle, close } = useDisclosure();

    const menuRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(menuRef, isOpen ? close : undefined);

    return { favorites, isOpen, toggle, close, menuRef, handleRemove: remove };
};
