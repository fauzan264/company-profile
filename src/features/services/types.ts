export interface Product {
  image: string;
  name: string;
  description: string;
}

export interface ProductLarge extends Product {
  url: string;
  url_text: string;
}
