
export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  category: ProductCategory;
  features: string[];
  imageUrl: string;
  integrations: string[];
  demoUrl?: string;
  tags: string[];
  rating: number;
  reviewCount: number;
}

export type ProductCategory = 
  | 'Analytics' 
  | 'Automation' 
  | 'CRM' 
  | 'DevOps' 
  | 'Marketing' 
  | 'Productivity' 
  | 'Security';

export interface Business {
  id: string;
  name: string;
  industry: string;
  size: BusinessSize;
  contact: {
    email: string;
    phone?: string;
  };
}

export type BusinessSize = 'Small' | 'Medium' | 'Enterprise';

export interface Review {
  id: string;
  productId: string;
  businessId: string;
  businessName: string;
  rating: number;
  comment: string;
  date: string;
}
