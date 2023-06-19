import ProductCardProps from './productCard';

interface ProductProps extends Omit<ProductCardProps, "imageUrlId"> {
    description: string;
    imageUrlIds: Array<string>;
    categoryIds: Array<string>;
    createdAt: Date;
    updatedAt: Date;
};

export default ProductProps;
