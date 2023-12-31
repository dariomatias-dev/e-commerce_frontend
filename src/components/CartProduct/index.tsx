import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { RiSubtractFill } from 'react-icons/ri';

import { ProductCardProps } from '@/@types/productCard';

import { useUserPreferences } from '@/contexts/UserPreferencesContext';

import { formatToReal } from '@/utils/formatToReal';
import { generateImageUrl } from '@/utils/generateImagePath';

type Props = {
  productData: ProductCardProps;
  updateProduct: (productId: string, quantity: number) => void;
  removeProduct: (productId: string) => void;
};

const CartProduct = ({ productData, updateProduct, removeProduct }: Props) => {
  const [amount, setAmount] = useState(1);
  const { ckeckProductIds } = useUserPreferences();

  const add = () => {
    if (amount < 20) setAmount(amount + 1);
  };

  const subtract = () => {
    if (amount !== 1) setAmount(amount - 1);
  };

  const deleteProduct = () => {
    const productId = productData.id;

    ckeckProductIds('cart', productId);
    removeProduct(productId);
  };

  useEffect(() => {
    updateProduct(productData.id, amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  const imageUrl = generateImageUrl(productData.name, 1, 'products');
  const price = formatToReal(productData.price * amount);

  return (
    <tr key={productData.id}>
      <td className="whitespace-nowrap p-4">
        <Image
          src={imageUrl}
          width={500}
          height={500}
          priority={true}
          alt={`Imagem do produto: ${productData.name}.`}
          className="mx-auto h-auto max-h-[5rem] w-full max-w-[5rem] object-contain"
        />
      </td>

      <td className="whitespace-nowrap p-4">{productData.name}</td>

      <td className="p-4">
        <div className="flex gap-1">
          <button type="button" onClick={subtract} className="">
            <RiSubtractFill className="h-6 w-6 text-gray-600 transition duration-300 hover:text-gray-500" />
          </button>

          {amount}

          <button type="button" onClick={add} className="">
            <AiOutlinePlus className="h-6 w-6 text-gray-600 transition duration-300 hover:text-gray-500" />
          </button>
        </div>
      </td>

      <td className="whitespace-nowrap p-4">{price}</td>

      <td className="whitespace-nowrap p-4">
        <button type="button" onClick={deleteProduct}>
          <MdDelete className="h-6 w-6 text-gray-600 transition duration-300 hover:text-gray-500" />
        </button>
      </td>
    </tr>
  );
};

export default CartProduct;
