"use client";

import { useState, useEffect } from "react";

import ProductCard from "../ProductCard";

import { ProductCardProps } from "@/@types/productCard";

type ProductsProps = {
    products: ProductCardProps[];
    skip: number;
    take: number;
};

const ProductsSection = () => {
    const [products, setProducts] = useState({} as ProductsProps);

    const fetchData = async (skip: number) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products?skip=${skip}`
            );
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData(0);
    }, []);

    if (JSON.stringify(products) === "{}") return <></>;

    return (
        <section className="bg-gray-100 px-10 py-8">
            <h2 className="text-4xl font-bold ml-20 mb-10">Produtos</h2>

            <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
                {products.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;
