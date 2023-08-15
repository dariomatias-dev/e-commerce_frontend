"use client";

import { useState, useEffect, useContext, createContext } from "react";

import FavoriteProps from "@/@types/favorite";

import { httpService } from "@/services/httpService";

type UserPreferencesContexProps = {
    cartProductIds: string[];
    ckeckCart: (productId: string) => void;
    updateCartProductIds: (newCartProductIds: string[]) => void;
    favoriteData: FavoriteProps;
    createFavorite: (userId: string, productId: string) => void;
    addFavorite: (userId: string, productId: string) => void;
};

const UserPreferencesContext = createContext({} as UserPreferencesContexProps);

type UserPreferencesProviderProps = {
    children: React.ReactNode;
};

export const UserPreferencesProvider = ({
    children,
}: UserPreferencesProviderProps) => {
    const [cartProductIds, setCartProductIds] = useState<string[]>([]);
    const [favoriteData, setFavoriteData] = useState({} as FavoriteProps);

    const fetchCart = async () => {
        const productIds = await httpService(
            "cart/f8a5ded4-9247-44c2-a794-15aa5ff6fda1"
        );

        setCartProductIds(productIds);
    };

    const ckeckCart = (productId: string) => {
        let newCartProductIds;
        if (cartProductIds.includes(productId)) {
            newCartProductIds = cartProductIds.filter((value) => {
                return value !== productId;
            });
        } else {
            newCartProductIds = [...cartProductIds, productId];
        }

        updateCartProductIds(newCartProductIds);
    };

    const updateCartProductIds = (newCartProductIds: string[]) => {
        setCartProductIds(newCartProductIds);

        const body = {
            productIds: newCartProductIds,
        };
        httpService("cart/f8a5ded4-9247-44c2-a794-15aa5ff6fda1", "PUT", body);
    };

    const createFavorite = async (userId: string, productId: string) => {
        const data = {
            userId,
            productIds: [productId],
        };

        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishlist`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            setFavoriteData(data);
        } catch (err) {
            console.log(err);
        }
    };

    const addFavorite = async (userId: string, productId: string) => {
        const productAdded = favoriteData.productIds.includes(productId);

        let productIds = favoriteData.productIds;
        if (productAdded)
            productIds = productIds.filter((value) => {
                return value !== productId;
            });
        else productIds.push(productId);

        const data = {
            userId,
            productIds: productIds ? productIds : [],
        };

        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/wishlist/57e99e52-753e-4da7-8a67-a6286edd2ee4`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            setFavoriteData(data);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/wishlist/57e99e52-753e-4da7-8a67-a6286edd2ee4`
            );
            const data = await response.json();

            if (data !== null) setFavoriteData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
        fetchCart();
    }, []);

    return (
        <UserPreferencesContext.Provider
            value={{
                cartProductIds,
                ckeckCart,
                updateCartProductIds,
                favoriteData,
                createFavorite,
                addFavorite,
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
