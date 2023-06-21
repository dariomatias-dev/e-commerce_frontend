'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { BsShare } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

import ProductProps from "@/@types/product";

type Props = {
    searchParams: Record<string, string>;
};

const Product = ({ searchParams }: Props) => {
    const [productData, setProductData] = useState({} as ProductProps);

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${searchParams.id}`);
            const data = await response.json();
            setProductData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (JSON.stringify(productData) === "{}") return <></>;

    return (
        <div>
            <div className="flex justify-between bg-zinc-100 text-white m-10 p-10 rounded-md">
                <div>
                    <div className="flex justify-end gap-4 mb-6">
                        <BsShare className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
                        <MdFavoriteBorder className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
                    </div>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${productData.imageUrlIds[0]}.jpg`}
                        width={1000}
                        height={1000}
                        priority={true}
                        className="w-full max-w-[400px] h-auto object-contain"
                        alt={`Produto ${productData.name}`}
                    />
                </div>
                <div className="w-full max-w-[580px] flex flex-col justify-between gap-4 bg-zinc-800 px-4 py-8 rounded-md">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold">
                                {productData.name}
                            </h1>
                            <p className="text-xs text-gray-400">
                                Código: {productData.id}
                            </p>
                            <p className="text-xs text-gray-300">
                                Vendido e entregue por: <span className="text-white font-semibold">Power Tech</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-green-500 text-2xl font-bold">
                                {Number(productData.price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
                            </p>
                            <p className="text-xs">
                                À vista no PIX ou boleto com 15% de desconto
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="w-full hover:bg-zinc-100 hover:text-black font-bold uppercase py-1 border border-zinc-200 hover:border-zinc-100 rounded-md transition duration-300"
                    >
                        COMPRAR
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;