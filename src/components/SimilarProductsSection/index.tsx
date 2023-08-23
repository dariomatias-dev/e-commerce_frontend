import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard';
import { ProductCardProps } from '@/@types/productCard';

type Props = {
  similarProducts: ProductCardProps[];
};

export const SimilarProductsSection = ({ similarProducts }: Props) => {
  return (
    <section className="flex flex-col gap-4 rounded-md bg-zinc-100 p-10">
      <h2 className="text-2xl font-bold text-gray-700">Produtos similares</h2>

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
        {similarProducts.map((similarProduct) => {
          return (
            <SwiperSlide key={similarProduct.id}>
              <ProductCard product={similarProduct} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
