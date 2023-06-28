import { useState } from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

import ProductCardProps from '@/@types/productCard';

type Props = {
    productData: ProductCardProps;
};

const CartProduct = ({ productData }: Props) => {
    const [amount, setAmount] = useState(1);

    const subtract = () => {
        if (amount !== 0)
            setAmount(amount + 1);
    };

    const add = () => {
        setAmount(amount + 1);
    };

    return (
        <tr key={productData.id}>
            <td className="whitespace-nowrap p-4">
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${productData.imageUrlId}.jpg`}
                    width={500}
                    height={500}
                    priority={true}
                    alt={`Imagem do produto: ${productData.name}.`}
                    className="w-full max-w-[5rem] max-h-[5rem] h-auto object-contain mx-auto"
                />
            </td>

            <td className="whitespace-nowrap p-4">
                {productData.name}
            </td>

            <td className="p-4">
                <div className="flex gap-1">
                    <button
                        type="button"
                        onClick={subtract}
                        className=""
                    >
                        <RiSubtractFill className="w-6 h-6 text-gray-600 hover:text-gray-500 transition duration-300" />
                    </button>

                    {amount}

                    <button
                        type="button"
                        onClick={add}
                        className=""
                    >
                        <AiOutlinePlus className="w-6 h-6 text-gray-600 hover:text-gray-500 transition duration-300" />
                    </button>
                </div>
            </td>

            <td className="whitespace-nowrap p-4">
                {Number(productData.price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
            </td>

            <td className="whitespace-nowrap p-4">
                <button
                    type="button"
                    className=""
                >
                    <MdDelete className="w-6 h-6 text-gray-600 hover:text-gray-500 transition duration-300" />
                </button>
            </td>
        </tr>
    );
};

export default CartProduct;
