import { FoodItem } from './data/foodData';

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category?: string;
}

export interface CustomerOrder {
  orderId: string;
  customerName: string;
  mobileNumber: string;
  email?: string;
  district: string;
  area: string;
  deliveryAddress: string;
  doorNumber: string;
  pincode: string;
  hotelName: string;
  deliveryDate: string;
  deliveryTime: string;
  specialInstructions?: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: string;
  orderTimestamp: Date;
}
