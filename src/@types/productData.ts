import ProductCardDataProps from './productCardData';

interface ProductProps extends Omit<ProductCardDataProps, "imageUrlId"> {
    description: string;
    imageUrlIds: Array<string>;
    categoryIds: Array<string>;
    createdAt: Date;
    updatedAt: Date;
};

export default ProductProps;
