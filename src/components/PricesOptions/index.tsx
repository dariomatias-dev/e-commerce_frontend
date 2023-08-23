import { formatToReal } from '@/utils/formatToReal';

type Props = {
  price: number;
};

const PricesOptions = ({ price }: Props) => {
  const formattedPrice = formatToReal(price);

  const valueInInstallments = (price / 12).toFixed(2);
  const formattedValueInInstallments = formatToReal(
    Number(valueInInstallments),
  );

  const oldPrice = price * 1.1;
  const formattedOldPrice = formatToReal(oldPrice);

  const discountPrice = price * 0.85;
  const formattedDisccountPrice = formatToReal(discountPrice);

  return (
    <div className="mt-5 flex flex-col gap-2">
      <div className="mx-6 flex justify-between">
        <h3 className="text-gray-600">Total</h3>
        <p className="text-lg font-bold">{formattedPrice}</p>
      </div>

      <div className="flex flex-col gap-1 text-center font-medium">
        <p className="text-xs text-green-600">à vista</p>
        <p className="text-xl font-bold text-green-500">
          {formattedDisccountPrice}
        </p>
        <p className="text-xs text-gray-500">no PIX com 15% de desconto</p>
      </div>

      <p className="text-center text-sm font-medium text-gray-400">ou</p>

      <div className="flex flex-col gap-1 text-center font-medium text-gray-500">
        <p className="text-xs">sem juros no cartão</p>
        <p className="text-xl font-bold text-red-600">{formattedOldPrice}</p>
        <p className="text-xs">
          em até 12x de{' '}
          <span className="text-red-500">{formattedValueInInstallments}</span>
        </p>
      </div>
    </div>
  );
};

export default PricesOptions;
