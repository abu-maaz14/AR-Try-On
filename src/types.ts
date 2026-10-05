export interface ProductSample {
  id: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  reviewsCount: number;
  dimensions: {
    width: string;
    depth: string;
    height: string;
  };
  material: string;
  image: string;
  description: string;
  modelType: 'sofa' | 'chair' | 'table' | 'lamp';
}

export interface LeadFormData {
  fullName: string;
  companyName: string;
  jobTitle: string;
  email: string;
  phone: string;
  website: string;
  hasApp: 'yes' | 'no' | 'in_development';
  productType: string;
  productCount: string;
  has3DModels: 'yes' | 'no' | 'some' | 'need_advice';
  interestedIn: string[];
  message: string;
}

export type ARDeviceMode = 'desktop' | 'mobile';
