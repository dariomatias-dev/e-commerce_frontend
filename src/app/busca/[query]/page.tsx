'use client'

import { useState, useEffect } from "react";

import ProductCardProps from "@/@types/productCard";
import ProductCard from "@/components/ProductCard";
import FilterButton from "./FilterButton";

type Props = {
    params: {
        query: string;
    };
};

type ProductsDataProps = {
    products: ProductCardProps[],
    skip: number;
    take: number;
};

const Search = ({ params }: Props) => {
    const [productsData, setProductsData] = useState({} as ProductsDataProps);

    const fetchData = async (skip: number) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?skip=${skip}`);
            const data = await response.json();
            setProductsData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData(0);
    }, []);

    if (JSON.stringify(productsData) === "{}") return <></>;

    return (
        <section className="flex flex-col gap-10 m-10">
            <div className="flex justify-between items-center text-white bg-black px-8 py-3 rounded-md">
                <h1 className="text-gray-100 text-2xl font-semibold">
                    Busca por: "{params.query}"
                </h1>

                <div className="flex gap-16">
                    <div>
                        <h2 className="text-gray-300 text-end text-xs text-gray">
                            Produtos
                        </h2>
                        <p>
                            10000
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <h2 className="text-xl font-semibold">
                            Filtrar:
                        </h2>

                        <FilterButton
                            title="Marcas"
                            content="Todas"
                        />

                        <FilterButton
                            title="Ordenar por"
                            content="Ordenar por"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
                {
                    productsData.products.map(productData => {
                        return (
                            <ProductCard productData={productData} />
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Search;
