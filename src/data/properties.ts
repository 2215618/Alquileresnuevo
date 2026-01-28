import { Property } from '../types';

export const properties: Property[] = [
  {
    id: 'P001',
    title: 'Casa en Punchana',
    type: 'Casa',
    district: 'Punchana',
    address: 'Calle Huánuco',
    price: 3000,
    area: '210 m²',
    bedrooms: 4,
    bathrooms: 2, // Estimated
    status: 'Sin amoblar',
    image: '/assets/properties/P001/cover.jpg'
  },
  {
    id: 'P002',
    title: 'Casa Iquitos Centro',
    type: 'Casa',
    district: 'Iquitos',
    address: 'Calle Yavarí',
    price: 2500,
    area: '150 m²',
    bedrooms: 3,
    bathrooms: 2, // Estimated
    status: 'Sin amoblar',
    image: '/assets/properties/P002/cover.jpg'
  },
  {
    id: 'P003',
    title: 'Monoambiente Iquitos',
    type: 'Monoambiente',
    district: 'Iquitos',
    address: 'Sargento Lores 946',
    price: 900,
    area: '35 m²',
    bedrooms: 1,
    bathrooms: 1,
    status: 'Amoblado',
    image: '/assets/properties/P003/cover.jpg'
  },
  {
    id: 'P004',
    title: 'Departamento Sargento Lores',
    type: 'Departamento',
    district: 'Iquitos',
    address: 'Sargento Lores 947',
    price: 1500,
    area: '87.5 m²',
    bedrooms: 2,
    bathrooms: 1, // Estimated
    status: 'Amoblado',
    image: '/assets/properties/P004/cover.jpg'
  },
  {
    id: 'P005',
    title: 'Departamento Echenique',
    type: 'Departamento',
    district: 'Iquitos',
    address: 'Calle Echenique',
    price: 1500,
    area: '240 m²',
    bedrooms: 2,
    bathrooms: 2,
    status: 'Sin amoblar',
    image: '/assets/properties/P005/cover.jpg'
  },
  {
    id: 'P006',
    title: 'Casa Grande Corporativa',
    type: 'Casa grande',
    district: 'Iquitos',
    address: 'Calle Nauta',
    price: 8000,
    area: '450 m²',
    bedrooms: 6, // Estimated for large house
    bathrooms: 4, // Estimated
    status: 'Corporativo',
    image: '/assets/properties/P006/cover.jpg'
  },
  {
    id: 'P007',
    title: 'Casa Libertad',
    type: 'Casa',
    district: 'Iquitos',
    address: 'Calle Libertad',
    price: 3000,
    area: '100 m²',
    bedrooms: 2, // Estimated
    bathrooms: 1, // Estimated
    status: 'Amoblado',
    image: '/assets/properties/P007/cover.jpg'
  },
  {
    id: 'P008',
    title: 'Propiedad 4 Pisos',
    type: 'Edificio',
    district: 'Iquitos',
    address: 'Condamine',
    price: 8000,
    area: '500 m²',
    bedrooms: null,
    bathrooms: null,
    status: 'Corporativo',
    image: '/assets/properties/P008/cover.jpg'
  },
  {
    id: 'P009',
    title: 'Oficinas García Saenz',
    type: 'Oficinas',
    district: 'Iquitos',
    address: 'García Saenz',
    price: 3000,
    area: '125 m²',
    bedrooms: null,
    bathrooms: 2, // Estimated
    status: 'Oficinas',
    image: '/assets/properties/P009/cover.jpg'
  }
];

export const comparisonData = [
    {label: 'Iquitos Cercado', night: 150, monthly: 1800, h1: '85%', h2: '40%'},
    {label: 'Punchana', night: 100, monthly: 1100, h1: '60%', h2: '30%'},
    {label: 'San Juan', night: 90, monthly: 900, h1: '50%', h2: '25%'},
    {label: 'Belén', night: 80, monthly: 750, h1: '45%', h2: '20%'}
];
