import { formatToReal } from "@/utils/formatToReal";

type Props = {
    price: number;
};

const PricesOptions = ({ price }: Props) => {
    const formattedPrice = formatToReal(price);

    const valueInInstallments = (price / 12).toFixed(2);
    const formattedValueInInstallments = formatToReal(
        Number(valueInInstallments)
    );

    const oldPrice = price * 1.1;
    const formattedOldPrice = formatToReal(oldPrice);

    const discountPrice = price * 0.85;
    const formattedDisccountPrice = formatToReal(discountPrice);

    return (
        <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between mx-6">
                <h3 className="text-gray-600">Total</h3>
                <p className="text-lg font-bold">{formattedPrice}</p>
            </div>

            <div className="flex flex-col gap-1 text-center font-medium">
                <p className="text-green-600 text-xs">à vista</p>
                <p className="text-green-500 text-xl font-bold">
                    {formattedDisccountPrice}
                </p>
                <p className="text-gray-500 text-xs">
                    no PIX com 15% de desconto
                </p>
            </div>

            <p className="text-gray-400 text-center text-sm font-medium">ou</p>

            <div className="flex flex-col gap-1 text-center text-gray-500 font-medium">
                <p className="text-xs">sem juros no cartão</p>
                <p className="text-red-600 text-xl font-bold">
                    {formattedOldPrice}
                </p>
                <p className="text-xs">
                    em até 12x de{" "}
                    <span className="text-red-500">
                        {formattedValueInInstallments}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default PricesOptions;
