"use client";

import { useEffect, useState } from "react";

import ProductCardProps from "@/@types/productCard";

import EmptyContentMessage from "@/components/EmptyContentMessage";
import FilterButton from "@/components/FilterButton";
import ProductCard from "@/components/ProductCard";

import { useUserPreferences } from "@/contexts/UserPreferencesContext";

const orderBy = [
    "Menor preço",
    "Maior preço",
    "Promoções",
    "Mais procurados",
    "Mais avaliados",
];

const Wishlist = () => {
    const [products, setProducts] = useState<ProductCardProps[]>([]);

    const { wishlistProductIds } = useUserPreferences();

    const fetchData = async () => {
        const response = await fetch(
            `${
                process.env.NEXT_PUBLIC_API_URL
            }/products-by-ids?productIds=${wishlistProductIds.join(",")}`
        );
        const data: ProductCardProps[] = await response.json();

        const updatedProducts = data.map((value) => {
            return { ...value, quantity: 1 };
        });

        setProducts(updatedProducts);
    };

    const removeProduct = (productId: string) => {
        setProducts((prevState) => {
            return prevState.filter((value) => {
                return value.id !== productId;
            });
        });
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!products.length) return EmptyContentMessage();

    return (
        <section className="m-10">
            <div className="flex justify-between items-center gap-16 text-white bg-black my-10 px-8 py-3 rounded-md">
                <h1 className="text-gray-100 text-2xl font-semibold">
                    Meu carrinho
                </h1>

                <div className="flex items-center gap-16">
                    <div>
                        <h2 className="text-gray-300 text-end text-xs text-gray">
                            Produtos
                        </h2>
                        <p>10000</p>
                    </div>

                    <div className="flex items-center gap-8">
                        <h2 className="text-xl font-semibold">Filtrar:</h2>
                        <FilterButton
                            title="Ordenar por"
                            standardFilter="Escolher"
                            filters={orderBy}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
                {products?.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        isWishlist={true}
                        removeProduct={removeProduct}
                    />
                ))}
            </div>
        </section>
    );
};

export default Wishlist;
