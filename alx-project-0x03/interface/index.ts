import { ReactNode } from 'react';

// Interface for Property data
export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: OffersProps;
  image: string;
  discount?: string;
}

export interface PageRouteProps {
  pageRoute: string;
}

// Layout Props
export interface LayoutProps {
  children: ReactNode;
}