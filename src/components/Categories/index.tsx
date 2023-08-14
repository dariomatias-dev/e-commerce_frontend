"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import CategoryProps from "@/@types/category";

import { generateImageUrl } from "@/utils/generateImagePath";

const Categories = () => {
    const [categoriesData, setCategoriesData] = useState<CategoryProps[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/categories`
            );
            const data = await response.json();
            setCategoriesData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!categoriesData) return <></>;

    return (
        <section className="flex flex-wrap justify-center gap-x-28 gap-y-10 mx-10 my-8">
            {categoriesData.map((categoryData) => {
                const imageUrl = generateImageUrl(
                    categoryData.name,
                    "categories"
                );

                return (
                    <div
                        key={categoryData.id}
                        className="flex flex-col justify-center items-center gap-3"
                    >
                        <Image
                            src={imageUrl}
                            width={500}
                            height={500}
                            priority={true}
                            alt={`Imagem da categoria ${categoryData.name}.`}
                            className="w-full max-w-[14rem] h-auto object-contain mx-auto mb-4"
                        />

                        <h3 className="text-gray-700 text-center font-bold uppercase">
                            {categoryData.name}
                        </h3>
                    </div>
                );
            })}
        </section>
    );
};

export default Categories;
