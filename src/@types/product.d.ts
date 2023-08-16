import ProductCardProps from './productCard';

export type ProductProps = Omit<ProductCardProps, 'imageUrlId'> & {
  description: string;
  amountOfImages: number;
  categoryIds: Array<string>;
};
