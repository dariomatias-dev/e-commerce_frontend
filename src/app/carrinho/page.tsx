"use client";

import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

import ProductCardProps from "@/@types/productCard";

import CartProduct from "@/components/CartProduct";
import PricesOptions from "@/components/PricesOptions";

import { useUserPreferences } from "@/contexts/UserPreferencesContext";

const Cart = () => {
    const [products, setProducts] = useState<ProductCardProps[]>([]);
    const { cartProductIds, updateCartProductIds } = useUserPreferences();

    const fetchData = async () => {
        const response = await fetch(
            `${
                process.env.NEXT_PUBLIC_API_URL
            }/products-by-ids?productIds=${cartProductIds.join(",")}`
        );
        const data = await response.json();

        setProducts(data);
    };

    const removeProduct = (productId: string) => {
        setProducts((prevState) => {
            return prevState.filter((value) => {
                return value.id !== productId;
            });
        });
    };

    const clearProducts = () => {
        updateCartProductIds([]);
        setProducts([]);
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!products.length) return <></>;

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
                            {products.map((productData) => (
                                <CartProduct
                                    key={productData.id}
                                    productData={productData}
                                    removeProduct={removeProduct}
                                />
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={clearProducts}
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

                        <PricesOptions price={100} />
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
