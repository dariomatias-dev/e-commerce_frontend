import { ProductProps } from './product';
import { SimilarProductsProps } from './similarProducts';

export type ProductWithSimilarProps = ProductProps & {
  similarProducts: SimilarProductsProps;
};
