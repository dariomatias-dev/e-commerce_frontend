export const formatToReal = (value: number) => {
  const formattedPrice = Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return formattedPrice;
};
