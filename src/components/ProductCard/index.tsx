import Image from 'next/image';
import Link from 'next/link';
import { HiMiniShoppingCart, HiOutlineShoppingCart } from 'react-icons/hi2';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { ProductCardProps } from '@/@types/productCard';

import { useUserPreferences } from '@/contexts/UserPreferencesContext';

import resetFormatting from '@/utils/resetFormatting';
import { generateImageUrl } from '@/utils/generateImagePath';

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

  const imageUrl = generateImageUrl(product.name, 'products');

  return (
    <div
      key={product.id}
      className="w-[230px] flex flex-col justify-between gap-4 p-2 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300"
    >
      <div className="h-10 flex hover:justify-end items-center group">
        <Link href={''} legacyBehavior>
          <a className="group-hover:hidden flex gap-2">
            <div>
              <div className="w-10 h-10 flex flex-col justify-center items-center bg-gray-400 text-xs rounded-md">
                <span className="text-white font-bold">15%</span>
              </div>
            </div>

            <div>
              <div className="w-10 h-10 flex flex-col justify-center items-center text-[8px] border-2 border-gray-200 rounded-md">
                <span>RESTAM</span>
                <span className="font-bold">500</span>
                <span>UNID.</span>
              </div>
            </div>
          </a>
        </Link>

        <div className="hidden group-hover:flex gap-4 mr-1">
          <button type="button" onClick={updateWishlist}>
            {wishlistProductIds.includes(product.id) ? (
              <MdFavorite className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
            ) : (
              <MdFavoriteBorder className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
            )}
          </button>

          <button
            type="button"
            onClick={() => ckeckProductIds('cart', product.id)}
          >
            {cartProductIds.includes(product.id) ? (
              <HiMiniShoppingCart className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
            ) : (
              <HiOutlineShoppingCart className="w-6 h-6 text-gray-400 hover:text-gray-500 transition-all duration-300" />
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
            className="w-full max-w-[10rem] max-h-[10rem] h-auto object-contain mx-auto"
          />

          <h3 className="text-gray-700 font-bold uppercase ml-2">
            {product.name}
          </h3>
          <p className="text-gray-700 text-xl font-bold ml-2">
            {Number(product.price).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </a>
      </Link>

      <button
        type="button"
        className="w-full flex justify-center items-center gap-4 hover:bg-green-500 py-3 border-2 border-green-300 hover:border-green-500 rounded-md transition duration-300 group"
      >
        <HiMiniShoppingCart className="w-5 h-5 text-green-600 group-hover:text-white" />
        <span className="text-green-600 group-hover:text-white font-bold uppercase">
          Comprar
        </span>
      </button>
    </div>
  );
};

export default ProductCard;
