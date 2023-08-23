import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { ProductWithSimilarProps } from '@/@types/productWithSimilar';

import { generateImageUrl } from '@/utils/generateImagePath';
import { ChangeProductImage } from './ChangeProductImage';
import { useState } from 'react';
import SwiperProps from 'swiper';

type Props = {
  product: ProductWithSimilarProps;
};

export const SideImagens = ({ product }: Props) => {
  const [swiper, setSwiper] = useState<SwiperProps | null>(null);

  return (
    <div className="relative flex flex-col items-center gap-2">
      <ChangeProductImage swiper={swiper} Icon={IoIosArrowUp} position="top" />
      <Swiper
        direction={'vertical'}
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        onSwiper={(s) => {
          setSwiper(s);
        }}
        className="flex h-full w-20 cursor-grab flex-col justify-between"
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
      <ChangeProductImage
        swiper={swiper}
        Icon={IoIosArrowDown}
        position="bottom"
      />
    </div>
  );
};
