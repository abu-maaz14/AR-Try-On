import { ProductSample } from '../types';

export const SAMPLE_PRODUCTS: ProductSample[] = [
  {
    id: 'modern-sofa',
    name: 'Modern Curved Bouclé Sofa',
    category: 'Living Room',
    price: 'PKR 125,000',
    rating: 5.0,
    reviewsCount: 48,
    dimensions: {
      width: '220 cm',
      depth: '98 cm',
      height: '76 cm',
    },
    material: 'Natural French Bouclé & Solid Ash Frame',
    image: '/src/assets/images/product_modern_sofa_1791173821188.jpg',
    description: 'Sculptural organic silhouette with supportive medium-density foam and tactile textured upholstery.',
    modelType: 'sofa',
  },
  {
    id: 'modern-chair',
    name: 'Nordic Sculptural Oak Armchair',
    category: 'Seating',
    price: 'PKR 48,500',
    rating: 4.9,
    reviewsCount: 32,
    dimensions: {
      width: '78 cm',
      depth: '82 cm',
      height: '74 cm',
    },
    material: 'Solid White Oak & Natural Ivory Linen',
    image: '/src/assets/images/product_modern_chair_1791173831079.jpg',
    description: 'Architectural lounge armchair designed for spatial flow, ergonomic lumbar balance, and natural warmth.',
    modelType: 'chair',
  },
  {
    id: 'marble-table',
    name: 'Travertine Monolith Coffee Table',
    category: 'Living Room',
    price: 'PKR 65,000',
    rating: 4.9,
    reviewsCount: 26,
    dimensions: {
      width: '120 cm',
      depth: '60 cm',
      height: '38 cm',
    },
    material: 'Honed Roman Travertine Stone',
    image: '/src/assets/images/product_modern_chair_1791173831079.jpg', // fallback
    description: 'Clean geometry carved from natural unfilled porous travertine with matte satin surface sealant.',
    modelType: 'table',
  },
];
