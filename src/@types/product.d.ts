import ProductCardProps from './productCard';

interface ProductProps extends Omit<ProductCardProps, "imageUrlId"> {
    description: string;
	amountOfImages: number,
    categoryIds: Array<string>;
};

export default ProductProps;
