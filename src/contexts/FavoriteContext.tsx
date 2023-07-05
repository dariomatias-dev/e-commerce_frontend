'use client'

import { useState, useEffect, useContext, createContext } from "react";

import FavoriteProps from "@/@types/favorite";

type FavoriteContexProps = {
    favoriteData: FavoriteProps;
    createFavorite: (userId: string, productId: string) => void;
    addFavorite: (userId: string, productId: string) => void;
};

const FavoriteContext = createContext({} as FavoriteContexProps);

type FavoriteProviderProps = {
    children: React.ReactNode;
};

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
    const [favoriteData, setFavoriteData] = useState({} as FavoriteProps);

    const createFavorite = async (userId: string, productId: string) => {
        const data = {
            userId,
            productIds: [productId],
        };


        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorite`, {
                method: "POST",
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
            productIds = productIds.filter(value => {
                return value !== productId;
            });
        else
            productIds.push(productId);

        const data = {
            userId,
            productIds: productIds ? productIds : [],
        };

        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorite/57e99e52-753e-4da7-8a67-a6286edd2ee4`, {
                method: "PATCH",
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

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorite/57e99e52-753e-4da7-8a67-a6286edd2ee4`);
            const data = await response.json();

            if (data !== null)
                setFavoriteData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <FavoriteContext.Provider value={{
            favoriteData,
            createFavorite,
            addFavorite,
        }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => {
    const context = useContext(FavoriteContext);
    return context;
};
