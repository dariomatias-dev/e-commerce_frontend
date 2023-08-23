'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { CategoryProps } from '@/@types/category';

import { generateImageUrl } from '@/utils/generateImagePath';

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState<CategoryProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
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
    <section className="mx-10 my-8 flex flex-wrap justify-center gap-x-28 gap-y-10">
      {categoriesData.map((categoryData) => {
        const imageUrl = generateImageUrl(categoryData.name, 1, 'categories');

        return (
          <div
            key={categoryData.id}
            className="flex flex-col items-center justify-center gap-3"
          >
            <Image
              src={imageUrl}
              width={500}
              height={500}
              priority={true}
              alt={`Imagem da categoria ${categoryData.name}.`}
              className="mx-auto mb-4 h-auto w-full max-w-[14rem] object-contain"
            />

            <h3 className="text-center font-bold uppercase text-gray-700">
              {categoryData.name}
            </h3>
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
