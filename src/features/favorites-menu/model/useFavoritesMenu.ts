import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/providers/store/config/hooks";
import { removeFavorite, selectFavorites } from "@/entities/favorites";
import { useClickOutside } from "@/shared/lib/hooks/useClickOutside";
import { useDisclosure } from "@/shared/lib/hooks/useDisclosure";

export const useFavoritesMenu = () => {
    const dispatch = useDispatch();
    const favorites = useAppSelector(selectFavorites);

    const { isOpen, toggle, close } = useDisclosure();
    const menuRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(menuRef, isOpen ? close : undefined);

    const handleRemove = (id: number) => {
        dispatch(removeFavorite(id));
    };

    return { favorites, isOpen, toggle, menuRef, handleRemove };
};
