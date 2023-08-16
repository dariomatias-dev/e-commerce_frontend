import OrderItemProps from './orderItem';

export type OrderProps = {
  id: string;
  orderDay: Date;
  orderItems: Array<OrderItemProps>;
  totalAmount: number;
};
