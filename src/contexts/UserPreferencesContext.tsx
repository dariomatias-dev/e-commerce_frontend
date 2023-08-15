"use client";

import { useState, useEffect, useContext, createContext } from "react";

import { httpService } from "@/services/httpService";

type UserPreferencesContexProps = {
    cartProductIds: string[];
    ckeckProductIds: (listType: string, productId: string) => void;
    updateProductIds: (listType: string, newCartProductIds: string[]) => void;
};

const UserPreferencesContext = createContext({} as UserPreferencesContexProps);

type UserPreferencesProviderProps = {
    children: React.ReactNode;
};

export const UserPreferencesProvider = ({
    children,
}: UserPreferencesProviderProps) => {
    const [cartProductIds, setCartProductIds] = useState<string[]>([]);
    const [wishlistProductIds, setWishlistProductIds] = useState<string[]>([]);

    const fetchData = async (listType: string) => {
        const productIds = await httpService(
            `${listType}/f8a5ded4-9247-44c2-a794-15aa5ff6fda1`
        );

        listType === "cart"
            ? setCartProductIds(productIds)
            : setWishlistProductIds(productIds);
    };

    const ckeckProductIds = (listType: string, productId: string) => {
        let productIds =
            listType === "cart" ? cartProductIds : wishlistProductIds;

        if (productIds.includes(productId)) {
            productIds = productIds.filter((value) => {
                return value !== productId;
            });
        } else {
            productIds = [...productIds, productId];
        }

        updateProductIds(listType, productIds);
    };

    const updateProductIds = (listType: string, productIds: string[]) => {
        listType === "cart"
            ? setCartProductIds(productIds)
            : setWishlistProductIds(productIds);

        const body = {
            productIds,
        };

        httpService(
            `${listType}/f8a5ded4-9247-44c2-a794-15aa5ff6fda1`,
            "PUT",
            body
        );
    };

    useEffect(() => {
        fetchData("cart");
        fetchData("wishlist");
    }, []);

    useEffect(() => {
        console.log(cartProductIds);
    }, [cartProductIds]);

    return (
        <UserPreferencesContext.Provider
            value={{
                cartProductIds,
                ckeckProductIds,
                updateProductIds,
            }}
        >
            {children}
        </UserPreferencesContext.Provider>
    );
};

export const useUserPreferences = () => {
    const context = useContext(UserPreferencesContext);
    return context;
};
