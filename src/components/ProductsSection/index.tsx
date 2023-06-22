'use client'

import { useState, useEffect } from "react";

import ProductCard from "../ProductCard";

import ProductCardProps from "@/@types/productCard";

type ProductsDataProps = {
    products: ProductCardProps[],
    skip: number;
    take: number;
};

const ProductsSection = () => {
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
        <section className="bg-gray-100 px-10 py-8">
            <h2 className="text-4xl font-bold ml-20 mb-10">
                Produtos
            </h2>

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

export default ProductsSection;
