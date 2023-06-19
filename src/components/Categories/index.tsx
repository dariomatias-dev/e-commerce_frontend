import { useEffect, useState } from "react";
import Image from "next/image";

import CategoryProps from "@/@types/category";

const Categories = () => {
    const [categoriesData, setCategoriesData] = useState<CategoryProps[]>([]);

    const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        const data = await response.json();
        setCategoriesData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!categoriesData) return <></>;

    return (
        <div className="flex flex-wrap justify-center gap-x-28 gap-y-10 mx-10 my-8">
            {
                categoriesData.map(categoryData => {
                    return (
                        <div className="flex flex-col justify-center items-center gap-3">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${categoryData.imageUrlId}.jpg`}
                                width={500}
                                height={500}
                                priority={true}
                                style={{ width: '100%', maxWidth: "10rem", height: 'auto', objectFit: "contain" }}
                                alt={`Imagem da categoria ${categoryData.name}.`}
                            />

                            <h3 className="text-gray-700 text-center font-bold uppercase">
                                {categoryData.name}
                            </h3>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Categories;
