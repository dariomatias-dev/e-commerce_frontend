import Image from 'next/image';
import Link from 'next/link';
import { HiMiniShoppingCart, HiOutlineShoppingCart } from 'react-icons/hi2';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { ProductCardProps } from '@/@types/productCard';

import { useUserPreferences } from '@/contexts/UserPreferencesContext';

import { generateImageUrl } from '@/utils/generateImagePath';
import { resetFormatting } from '@/utils/resetFormatting';

type Props = {
  product: ProductCardProps;
  isWishlist?: boolean;
  removeProduct?: (productId: string) => void;
};

const ProductCard = ({ product, isWishlist = false, removeProduct }: Props) => {
  const formattedProductName = resetFormatting(product.name);

  const { cartProductIds, wishlistProductIds, ckeckProductIds } =
    useUserPreferences();

  const updateWishlist = () => {
    ckeckProductIds('wishlist', product.id);
    if (isWishlist) {
      removeProduct!(product.id);
    }
  };

  const imageUrl = generateImageUrl(product.name, 1, 'products');

  return (
    <div
      key={product.id}
      className="flex w-[230px] flex-col justify-between gap-4 rounded-md bg-white p-2 shadow-md transition duration-300 hover:shadow-lg"
    >
      <div className="group flex h-10 items-center hover:justify-end">
        <Link href={''} legacyBehavior>
          <a className="flex gap-2 group-hover:hidden">
            <div>
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-md bg-gray-400 text-xs">
                <span className="font-bold text-white">15%</span>
              </div>
            </div>

            <div>
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-md border-2 border-gray-200 text-[8px]">
                <span>RESTAM</span>
                <span className="font-bold">500</span>
                <span>UNID.</span>
              </div>
            </div>
          </a>
        </Link>

        <div className="mr-1 hidden gap-4 group-hover:flex">
          <button type="button" onClick={updateWishlist}>
            {wishlistProductIds.includes(product.id) ? (
              <MdFavorite className="h-6 w-6 text-gray-400 transition-all duration-300 hover:text-gray-500" />
            ) : (
              <MdFavoriteBorder className="h-6 w-6 text-gray-400 transition-all duration-300 hover:text-gray-500" />
            )}
          </button>

          <button
            type="button"
            onClick={() => ckeckProductIds('cart', product.id)}
          >
            {cartProductIds.includes(product.id) ? (
              <HiMiniShoppingCart className="h-6 w-6 text-gray-400 transition-all duration-300 hover:text-gray-500" />
            ) : (
              <HiOutlineShoppingCart className="h-6 w-6 text-gray-400 transition-all duration-300 hover:text-gray-500" />
            )}
          </button>
        </div>
      </div>

      <Link
        href={{
          pathname: `/produto/${formattedProductName}`,
          query: {
            id: product.id,
          },
        }}
        legacyBehavior
      >
        <a className="flex flex-col justify-between gap-3">
          <Image
            src={imageUrl}
            width={500}
            height={500}
            priority={true}
            alt={`Imagem do produto: ${product.name}.`}
            className="mx-auto h-auto max-h-[10rem] w-full max-w-[10rem] object-contain"
          />

          <h3 className="ml-2 font-bold uppercase text-gray-700">
            {product.name}
          </h3>
          <p className="ml-2 text-xl font-bold text-gray-700">
            {Number(product.price).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </a>
      </Link>

      <button
        type="button"
        className="group flex w-full items-center justify-center gap-4 rounded-md border-2 border-green-300 py-3 transition duration-300 hover:border-green-500 hover:bg-green-500"
      >
        <HiMiniShoppingCart className="h-5 w-5 text-green-600 group-hover:text-white" />
        <span className="font-bold uppercase text-green-600 group-hover:text-white">
          Comprar
        </span>
      </button>
    </div>
  );
};

export default ProductCard;
