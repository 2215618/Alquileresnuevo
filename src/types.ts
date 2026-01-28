export interface Property {
  id: string;
  title: string;
  type: string;
  district: string;
  address: string;
  price: number;
  area: string;
  bedrooms: number | null;
  bathrooms: number | null; // null if not specified or not applicable (e.g. offices)
  status: string;
  image: string;
  description?: string;
}

export interface ComparisonData {
  label: string;
  night: number;
  monthly: number;
  h1: string; // height percentage for night bar
  h2: string; // height percentage for monthly bar
}