import Image from 'next/image';
import SwiperProps from 'swiper';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { ProductWithSimilarProps } from '@/@types/productWithSimilar';

import { ChangeProductImage } from './ChangeProductImage';

import { generateImageUrl } from '@/utils/generateImagePath';

type Props = {
  product: ProductWithSimilarProps;
  changeImage: (imageNumber: number) => void;
};

export const SideImagens = ({ product, changeImage }: Props) => {
  const [swiper, setSwiper] = useState<SwiperProps | null>(null);

  return (
    <div className="relative flex flex-col items-center gap-2">
      {product.amountOfImages > 4 && (
        <ChangeProductImage
          swiper={swiper}
          Icon={IoIosArrowUp}
          position="top"
        />
      )}

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
              <div
                onClick={() => changeImage(index)}
                className="flex h-20 w-full items-center rounded-xl bg-white p-4"
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
            </SwiperSlide>
          );
        })}
      </Swiper>

      {product.amountOfImages > 4 && (
        <ChangeProductImage
          swiper={swiper}
          Icon={IoIosArrowDown}
          position="bottom"
        />
      )}
    </div>
  );
};
