export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  liked: boolean;
}

export interface ProductFormValues {
  title: string;
  description: string;
  image: string;
}

export interface ProductFormErrors {
  title?: string;
  description?: string;
  image?: string;
}
