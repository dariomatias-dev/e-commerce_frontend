'use client'

import { useEffect, useState } from "react";

import FilterButton from "@/components/FilterButton";
import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";

import ProductCardProps from "@/@types/productCard";

import { useFavorite } from "@/contexts/FavoriteContext";

type ProductsDataProps = {
    products: ProductCardProps[],
    skip: number;
    take: number;
};

const orderBy = [
    "Menor preço",
    "Maior preço",
    "Promoções",
    "Mais procurados",
    "Mais avaliados",
];

const Wishlist = () => {
    const [productsData, setProductsData] = useState({} as ProductsDataProps);

    const { favoriteData } = useFavorite();

    const fetchData = async (skip: number) => {
        console.log(favoriteData)
        const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/favorite-products?skip=${skip}`);
        favoriteData.productIds?.forEach(productId => {
            url.searchParams.append("productIds", productId);
        });

        try {
            const response = await fetch(url);
            const data = await response.json();
            setProductsData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (favoriteData)
            fetchData(0);
    }, [favoriteData]);

    if (JSON.stringify(productsData) === "{}") return <Loading />;

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
                        <p>
                            10000
                        </p>
                    </div>
                    <div className="flex items-center gap-8">
                        <h2 className="text-xl font-semibold">
                            Filtrar:
                        </h2>
                        <FilterButton
                            title="Ordenar por"
                            standardFilter="Escolher"
                            filters={orderBy}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
                {productsData.products?.map(productData => (
                    <ProductCard
                        key={productData.id}
                        productData={productData}
                    />
                ))}
            </div>
        </section>
    );
};

export default Wishlist;
