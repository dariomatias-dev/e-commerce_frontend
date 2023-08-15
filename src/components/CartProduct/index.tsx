import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

import ProductCardProps from "@/@types/productCard";

import { useUserPreferences } from "@/contexts/UserPreferencesContext";

import { generateImageUrl } from "@/utils/generateImagePath";
import { formatToReal } from "@/utils/formatToReal";

type Props = {
    productData: ProductCardProps;
    removeProduct: (productId: string) => void;
    chancePricesAndQuantities: (productId: string, quantity: number) => void;
};

const CartProduct = ({
    productData,
    removeProduct,
    chancePricesAndQuantities,
}: Props) => {
    const [amount, setAmount] = useState(1);
    const { ckeckCart } = useUserPreferences();

    const add = () => {
        if (amount < 20) setAmount(amount + 1);
    };

    const subtract = () => {
        if (amount !== 1) setAmount(amount - 1);
    };

    const deleteProduct = () => {
        const productId = productData.id;

        ckeckCart(productId);
        removeProduct(productId);
    };

    const imageUrl = generateImageUrl(productData.name, "products");
    const price = formatToReal(productData.price * amount);

    useEffect(() => {
        chancePricesAndQuantities(productData.id, amount);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount]);

    return (
        <tr key={productData.id}>
            <td className="whitespace-nowrap p-4">
                <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    priority={true}
                    alt={`Imagem do produto: ${productData.name}.`}
                    className="w-full max-w-[5rem] max-h-[5rem] h-auto object-contain mx-auto"
                />
            </td>

            <td className="whitespace-nowrap p-4">{productData.name}</td>

            <td className="p-4">
                <div className="flex gap-1">
                    <button type="button" onClick={subtract} className="">
                        <RiSubtractFill className="w-6 h-6 text-gray-600 hover:text-gray-500 transition duration-300" />
                    </button>

                    {amount}

                    <button type="button" onClick={add} className="">
                        <AiOutlinePlus className="w-6 h-6 text-gray-600 hover:text-gray-500 transition duration-300" />
                    </button>
                </div>
            </td>

            <td className="whitespace-nowrap p-4">{price}</td>

            <td className="whitespace-nowrap p-4">
                <button type="button" onClick={deleteProduct}>
                    <MdDelete className="w-6 h-6 text-gray-600 hover:text-gray-500 transition duration-300" />
                </button>
            </td>
        </tr>
    );
};

export default CartProduct;
