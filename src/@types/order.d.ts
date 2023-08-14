import OrderItemProps from "./orderItem";

type OrderProps = {
    id: string;
    orderDay: Date;
    orderItems: Array<OrderItemProps>;
    totalAmount: number;
};

export default OrderProps;
