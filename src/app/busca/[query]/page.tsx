'use client';

import { useEffect, useState } from 'react';

import FilterButton from '@/components/FilterButton';
import Loading from '@/components/Loading';
import ProductCard from '@/components/ProductCard';

import { ProductCardProps } from '@/@types/productCard';

type Props = {
  params: {
    query: string;
  };
};

type ProductsProps = {
  products: ProductCardProps[];
  skip: number;
  take: number;
};

const brands = ['Nvidia', 'AMD', 'Intel', 'Asus', 'MSI', 'Gigabyte'];

const orderBy = [
  'Menor preço',
  'Maior preço',
  'Promoções',
  'Mais procurados',
  'Mais avaliados',
];

const Search = ({ params }: Props) => {
  const [products, setProducts] = useState({} as ProductsProps);

  const fetchData = async (skip: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?skip=${skip}`,
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

  if (JSON.stringify(products) === '{}') return <Loading />;

  return (
    <section className="flex flex-col gap-10 m-10">
      <div className="flex justify-between items-center text-white bg-black px-8 py-3 rounded-md">
        <h1 className="text-gray-100 text-2xl font-semibold">
          Busca por: &quot;{params.query}&quot;
        </h1>

        <div className="flex items-center gap-16">
          <div>
            <h2 className="text-gray-300 text-end text-xs text-gray">
              Produtos
            </h2>
            <p>10000</p>
          </div>

          <div className="flex items-center gap-8">
            <h2 className="text-xl font-semibold">Filtrar:</h2>

            <FilterButton
              title="Marcas"
              standardFilter="Todas"
              filters={brands}
            />

            <FilterButton
              title="Ordenar por"
              standardFilter="Escolher"
              filters={orderBy}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
        {products.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Search;
