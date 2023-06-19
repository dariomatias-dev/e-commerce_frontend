import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

import ProductCardProps from "@/@types/productCard";

type ProductsDataProps = {
    products: ProductCardProps[],
    skip: number;
    take: number;
};

const Products = () => {
    const [productsData, setProductsData] = useState({} as ProductsDataProps);

    const fetchData = async (skip: number) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?skip=${skip}`);
        const data = await response.json();
        setProductsData(data);
    };

    useEffect(() => {
        fetchData(0);
    }, []);

    if (JSON.stringify(productsData) === "{}") return <></>;

    return (
        <div className="flex flex-wrap justify-center gap-x-28 gap-y-10 bg-gray-100 px-10 py-8">
            {
                productsData.products.map(productData => {
                    return (
                        <div
                            key={productData.id}
                            className="w-[230px] flex flex-col gap-6 p-2 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300"
                        >
                            <div className="h-10 flex hover:justify-end items-center group">
                                <div className="group-hover:hidden flex gap-2">
                                    <div>
                                        <div className="w-10 h-10 flex flex-col justify-center items-center bg-gray-400 text-xs rounded-md">
                                            <span className="text-white font-bold">15%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-10 h-10 flex flex-col justify-center items-center text-[8px] border-2 border-gray-200 rounded-md">
                                            <span>RESTAM</span>
                                            <span className="font-bold">500</span>
                                            <span>UNID.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden group-hover:flex gap-4 mr-1">
                                    <MdFavoriteBorder className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
                                    <FaShoppingCart className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
                                </div>
                            </div>

                            <Link
                                href={``}
                                legacyBehavior
                            >
                                <a className="flex flex-col">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${productData.imageUrlId}.jpg`}
                                        width={500}
                                        height={500}
                                        priority={true}
                                        alt={`Imagem da categoria ${productData.name}.`}
                                        className="w-full max-w-[10rem] h-auto object-contain mx-auto mb-4"
                                    />

                                    <h3 className="text-gray-700 font-bold uppercase ml-2 mb-3">
                                        {productData.name}
                                    </h3>

                                    <p className="text-gray-700 text-xl font-bold ml-2">
                                        {Number(productData.price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
                                    </p>
                                </a>
                            </Link>

                            <button
                                type="button"
                                className="w-full flex justify-center items-center gap-4 hover:bg-green-500 py-3 border-2 border-green-300 hover:border-green-500 rounded-md transition duration-300 group"
                            >
                                <FaShoppingCart className="w-5 h-5 text-green-600 group-hover:text-white" />

                                <span className="text-green-600 group-hover:text-white font-bold uppercase">
                                    Comprar
                                </span>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Products;
