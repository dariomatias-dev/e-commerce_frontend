import OrderItemProps from "./orderItem";

type OrderProps = {
    id: string;
    userId: string;
    orderDay: Date;
    orderItems: Array<OrderItemProps>;
    totalAmount: string;
    updatedAt: Date;
};

export default OrderProps;
