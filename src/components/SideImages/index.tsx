import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import { generateImageUrl } from '@/utils/generateImagePath';
import { ProductWithSimilarProps } from '@/@types/productWithSimilar';

type Props = {
  product: ProductWithSimilarProps;
};

export const SideImagens = ({ product }: Props) => {
  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={4}
      pagination={{
        clickable: true,
      }}
      className="h-full w-24"
    >
      {Array.from({ length: product.amountOfImages }).map((_, index) => {
        const imageNumber = index + 1;
        const imageUrl = generateImageUrl(
          product.name,
          imageNumber,
          'products',
        );

        return (
          <SwiperSlide key={index}>
            <div className="flex h-20 w-full items-center rounded-xl bg-white p-4">
              <Image
                src={imageUrl}
                width={1000}
                height={1000}
                priority={true}
                className="max-h-16 object-contain"
                alt={`Produto ${product.name}`}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
