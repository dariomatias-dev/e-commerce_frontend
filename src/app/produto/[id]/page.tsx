'use client';

import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsShare } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';

import { iconStyle } from './defaultStyles';

import { ProductProps } from '@/@types/product';
import { ProductWithSimilarProps } from '@/@types/productWithSimilar';
import { SimilarProductsProps } from '@/@types/similarProducts';

import ProductCard from '@/components/ProductCard';

import { SideImagens } from '@/components/SideImages';
import { formatToReal } from '@/utils/formatToReal';
import { generateImageUrl } from '@/utils/generateImagePath';

type Props = {
  searchParams: Record<string, string>;
};

const Product = ({ searchParams }: Props) => {
  const [product, setProduct] = useState({} as ProductWithSimilarProps);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/product/${searchParams.id}`,
      );
      const data: ProductProps = await response.json();
      const similarProducts = await fetchSimilarProducts(
        data.id,
        data.categoryIds,
      );

      if (similarProducts !== undefined) {
        setProduct({ ...data, similarProducts });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSimilarProducts = async (
    productId: string,
    categoryIds: string[],
  ) => {
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/products-by-categories?productId=${productId}&categoryIds=${categoryIds.join(
          ',',
        )}&skip=0`,
      );
      const data: SimilarProductsProps = await response.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (JSON.stringify(product) === '{}') return <></>;

  const price = product.price;
  const formattedPrice = formatToReal(price);

  const valueInInstallments = price / 12;
  const formattedValueInInstallments = formatToReal(
    Number(valueInInstallments),
  );

  const oldPrice = price * 1.1;
  const formattedOldPrice = formatToReal(oldPrice);

  const discountPrice = price * 0.85;
  const formattedDisccountPrice = formatToReal(discountPrice);

  return (
    <div className="m-10 flex flex-col gap-8">
      <div className="flex h-[500px] gap-14 rounded-md bg-zinc-100 p-10 text-white">
        <div className="relative h-full w-full">
          <div className="absolute right-4 top-4 z-10 mb-6 flex justify-end gap-4">
            <BsShare className={iconStyle} />
            <MdFavoriteBorder className={iconStyle} />
          </div>

          <div className="flex h-full gap-6">
            <SideImagens product={product} />

            <div className="flex h-full w-full flex-col gap-4 rounded-xl bg-white">
              <Swiper
                modules={[Autoplay, Navigation, EffectFade]}
                effect="fade"
                loop={true}
                className="h-full w-[300px] cursor-grab"
              >
                {Array.from({ length: product.amountOfImages }).map(
                  (_, index) => {
                    const imageNumber = index + 1;
                    const imageUrl = generateImageUrl(
                      product.name,
                      imageNumber,
                      'products',
                    );

                    return (
                      <SwiperSlide key={index}>
                        <div className="flex h-full w-full items-center bg-white p-10">
                          <Image
                            src={imageUrl}
                            width={1000}
                            height={1000}
                            priority={true}
                            className="h-auto w-full object-contain"
                            alt={`Produto ${product.name}`}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  },
                )}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[500px] flex-col justify-between gap-4 rounded-md bg-zinc-800 px-4 py-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-xs text-gray-400">Código: {product.id}</p>
              <p className="text-xs text-gray-300">
                Vendido e entregue por:{' '}
                <span className="font-semibold text-white">Power Tech</span>
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-zinc-400 line-through">
                {formattedPrice}
              </p>
              <p className="text-2xl font-bold text-green-500">
                {formattedDisccountPrice}
              </p>
              <p className="text-xs">
                À vista no PIX ou boleto com 15% de desconto
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-zinc-200">
                {formattedOldPrice}
              </p>
              <p className="text-xs">
                Em até 12x de{' '}
                <span className="font-bold">
                  {formattedValueInInstallments}
                </span>{' '}
                sem juros no cartão
              </p>
            </div>
          </div>

          <button
            type="button"
            className="w-full rounded-md border border-zinc-200 py-1 font-bold uppercase transition duration-300 hover:border-zinc-100 hover:bg-zinc-100 hover:text-black"
          >
            COMPRAR
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 rounded-md bg-zinc-100 p-10">
        <h2 className="flex cursor-pointer items-center gap-3 text-3xl font-bold uppercase text-gray-700 transition duration-300 hover:text-gray-900">
          <FaPlus className="h-7 w-7" />
          Descrição do produto
        </h2>
        <p className="text-justify text-black">{product.description}</p>
      </div>

      <div className="flex flex-col gap-4 rounded-md bg-zinc-100 p-10">
        <h2 className="text-2xl font-bold text-gray-700">Produtos similares</h2>

        <div>
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="w-full"
          >
            {product.similarProducts.products.map((similarProduct) => {
              return (
                <SwiperSlide key={similarProduct.id}>
                  <ProductCard product={similarProduct} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Product;
