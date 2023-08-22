'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsShare } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';

import { ProductProps } from '@/@types/product';
import { ProductCardProps } from '@/@types/productCard';

import ProductCard from '@/components/ProductCard';

import { generateImageUrl } from '@/utils/generateImagePath';
import { formatToReal } from '@/utils/formatToReal';

type Props = {
  searchParams: Record<string, string>;
};

type SimilarProductsProps = {
  products: ProductCardProps[];
  skip: number;
};

type ProductWithSimilarProps = ProductProps & {
  similarProducts: SimilarProductsProps;
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

      return {
        ...data,
        products: [...data.products, ...data.products, ...data.products],
      };
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
    <div className="flex flex-col gap-8 m-10">
      <div className="h-[500px] flex gap-14 bg-zinc-100 text-white p-10 rounded-md">
        <div className="w-full h-full relative">
          <div className="absolute top-4 right-4 flex justify-end gap-4 mb-6 z-10">
            <BsShare className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
            <MdFavoriteBorder className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
          </div>

          <div className="h-full flex gap-10">
            <div className="flex flex-col gap-2">
              {Array.from({ length: product.amountOfImages }).map(
                (_, index) => {
                  const imageNumber = index + 1;
                  const imageUrl = generateImageUrl(
                    product.name,
                    imageNumber,
                    'products',
                  );

                  return (
                    <div
                      key={index}
                      className="w-24 h-24 flex items-center bg-white px-4 rounded-xl"
                    >
                      <Image
                        src={imageUrl}
                        width={1000}
                        height={1000}
                        priority={true}
                        className="max-h-16 object-contain"
                        alt={`Produto ${product.name}`}
                      />
                    </div>
                  );
                },
              )}
            </div>

            <div className="h-full w-full flex flex-col gap-4 bg-white rounded-xl">
              <Swiper
                modules={[Autoplay, Navigation, EffectFade]}
                effect="fade"
                loop={true}
                className="w-[300px] h-full cursor-grab"
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
                        <div className="w-full h-full flex items-center bg-white p-10">
                          <Image
                            src={imageUrl}
                            width={1000}
                            height={1000}
                            priority={true}
                            className="w-full h-auto object-contain"
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

        <div className="w-full max-w-[500px] flex flex-col justify-between gap-4 bg-zinc-800 px-4 py-8 rounded-md">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-xs text-gray-400">Código: {product.id}</p>
              <p className="text-xs text-gray-300">
                Vendido e entregue por:{' '}
                <span className="text-white font-semibold">Power Tech</span>
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm text-zinc-400 font-semibold line-through">
                {formattedPrice}
              </p>
              <p className="text-green-500 text-2xl font-bold">
                {formattedDisccountPrice}
              </p>
              <p className="text-xs">
                À vista no PIX ou boleto com 15% de desconto
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-200 font-bold">
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
            className="w-full hover:bg-zinc-100 hover:text-black font-bold uppercase py-1 border border-zinc-200 hover:border-zinc-100 rounded-md transition duration-300"
          >
            COMPRAR
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 bg-zinc-100 p-10 rounded-md">
        <h2 className="flex items-center gap-3 text-gray-700 hover:text-gray-900 text-3xl font-bold uppercase cursor-pointer transition duration-300">
          <FaPlus className="w-7 h-7" />
          Descrição do produto
        </h2>
        <p className="text-black text-justify">{product.description}</p>
      </div>

      <div className="flex flex-col gap-4 bg-zinc-100 p-10 rounded-md">
        <h2 className="text-2xl text-gray-700 font-bold">Produtos similares</h2>

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
