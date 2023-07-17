"use client";

import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

import CartProduct from "@/components/CartProduct";

import ProductCardProps from "@/@types/productCard";

type ProductsDataProps = {
    products: ProductCardProps[];
    skip: number;
    take: number;
};

const Cart = () => {
    const [productsData, setProductsData] = useState({} as ProductsDataProps);

    const fecthData = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products?skip=${0}`
            );
            const data = await response.json();
            setProductsData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fecthData();
    }, []);

    if (JSON.stringify(productsData) === "{}") return <></>;

    return (
        <section className="m-10">
            <h1 className="text-2xl">Meu carrinho</h1>

            <div className="flex gap-10 mt-10">
                <div className="w-full flex flex-col gap-4">
                    <table className="divide-y divide-gray-200 border border-t-0 border-gray-200 rounded-md shadow-lg overflow-hidden">
                        <thead className="bg-black text-white text-left text-sm tracking-wider">
                            {["Produto", "", "Quant.", "Preço", ""].map(
                                (fieldName, index) => (
                                    <th
                                        key={index}
                                        scope="col"
                                        className="font-normal p-4"
                                    >
                                        {fieldName}
                                    </th>
                                )
                            )}
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {productsData.products.map((productData) => (
                                <CartProduct
                                    key={productData.id}
                                    productData={productData}
                                />
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="w-min bg-white hover:bg-black text-black hover:text-white text-xs whitespace-nowrap uppercase px-4 py-2 border border-zinc-500 hover:border-black rounded-md transition duration-300"
                        >
                            Limpar carrinho
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="w-[340px] h-min p-5 border border-zinc-200 rounded-md shadow-lg">
                        <h2 className="text-gray-800 text-2xl text-center font-semibold pb-5 border-b border-zinc-200">
                            Resumo
                        </h2>

                        <div className="flex flex-col gap-2 mt-5">
                            <div className="flex justify-between mx-6">
                                <h3 className="text-gray-600">Total</h3>
                                <p className="text-lg font-bold">R$ 3.635,05</p>
                            </div>

                            <div className="flex flex-col gap-1 text-center font-medium">
                                <p className="text-green-600 text-xs">
                                    à vista
                                </p>
                                <p className="text-green-500 text-xl font-bold">
                                    R$ 3.089,79
                                </p>
                                <p className="text-gray-500 text-xs">
                                    no PIX com 15% de desconto
                                </p>
                            </div>

                            <p className="text-gray-400 text-center text-sm font-medium">
                                ou
                            </p>

                            <div className="flex flex-col gap-1 text-center text-gray-500 font-medium">
                                <p className="text-xs">sem juros no cartão</p>
                                <p className="text-red-600 text-xl font-bold">
                                    R$ 3.635,05
                                </p>
                                <p className="text-xs">
                                    em até 12x de{" "}
                                    <span className="text-red-500">
                                        R$ 302,92
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full flex justify-center items-center gap-4 bg-green-600 hover:bg-green-500 text-white text-lg font-bold uppercase px-6 py-4 rounded-md transition duration-300"
                    >
                        <FaShoppingCart className="w-6 h-6" />
                        Fazer pedido
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;
