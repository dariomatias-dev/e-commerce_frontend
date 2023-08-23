'use client';

import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { ProductCardProps } from '@/@types/productCard';

import CartProduct from '@/components/CartProduct';
import EmptyContentMessage from '@/components/EmptyContentMessage';
import PricesOptions from '@/components/PricesOptions';

import { useUserPreferences } from '@/contexts/UserPreferencesContext';

type ProductsProps = ProductCardProps & {
  quantity: number;
};

const Cart = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const { cartProductIds, updateProductIds } = useUserPreferences();
  let price = 0;

  const fetchData = async () => {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/products-by-ids?productIds=${cartProductIds.join(',')}`,
    );
    const data: ProductCardProps[] = await response.json();

    const updatedProducts = data.map((value) => {
      return { ...value, quantity: 1 };
    });

    setProducts(updatedProducts);
  };

  const updateProduct = (productId: string, quantity: number) => {
    setProducts((prevState) => {
      return prevState.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity };
        }
        return product;
      });
    });
  };

  const removeProduct = (productId: string) => {
    setProducts((prevState) => {
      return prevState.filter((value) => {
        return value.id !== productId;
      });
    });
  };

  const clearProducts = () => {
    updateProductIds('cart', []);
    setProducts([]);
  };

  const setPrice = () => {
    for (let product of products) {
      price += product.price * product.quantity;
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!products.length) return EmptyContentMessage();

  setPrice();

  return (
    <section className="m-10">
      <h1 className="text-2xl">Meu carrinho</h1>

      <div className="mt-10 flex gap-10">
        <div className="flex w-full flex-col gap-4">
          <table className="divide-y divide-gray-200 overflow-hidden rounded-md border border-t-0 border-gray-200 shadow-lg">
            <thead className="bg-black text-left text-sm tracking-wider text-white">
              {['Produto', '', 'Quant.', 'Preço', ''].map(
                (fieldName, index) => (
                  <th key={index} scope="col" className="p-4 font-normal">
                    {fieldName}
                  </th>
                ),
              )}
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {products.map((productData) => (
                <CartProduct
                  key={productData.id}
                  productData={productData}
                  updateProduct={updateProduct}
                  removeProduct={removeProduct}
                />
              ))}
            </tbody>
          </table>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={clearProducts}
              className="w-min whitespace-nowrap rounded-md border border-zinc-500 bg-white px-4 py-2 text-xs uppercase text-black transition duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              Limpar carrinho
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="h-min w-[340px] rounded-md border border-zinc-200 p-5 shadow-lg">
            <h2 className="border-b border-zinc-200 pb-5 text-center text-2xl font-semibold text-gray-800">
              Resumo
            </h2>

            <PricesOptions price={price} />
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-4 rounded-md bg-green-600 px-6 py-4 text-lg font-bold uppercase text-white transition duration-300 hover:bg-green-500"
          >
            <FaShoppingCart className="h-6 w-6" />
            Fazer pedido
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
