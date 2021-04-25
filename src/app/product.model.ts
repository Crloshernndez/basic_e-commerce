import { environment } from 'src/environments/environment';

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

export interface Environment {
  production: boolean;
  uri_api: string;
}
