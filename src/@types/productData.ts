import ProductCardDataProps from './productCardData';

interface ProductProps extends Omit<ProductCardDataProps, "imageUrlId"> {
    description: string;
    imageUrlIds: Array<string>;
    categoryIds: Array<string>;
}

export default ProductProps;
