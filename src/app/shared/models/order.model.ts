import { Product } from './product.model';

export interface Order {
  name: string;
  email: string;
  date: string;
  shippingAddress?: string;
  city?: string;
  store?: string;
  total: number;
  cart: Product[];
  id?: any;
}
