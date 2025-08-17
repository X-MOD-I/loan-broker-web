// Testimonial Types
export interface Testimonial {
  name: string;
  text: string;
  stars: number;
}

export interface ReviewData {
  id: string;
  name: string;
  rating: number;
  title: string;
  content: string;
  location: string;
  loanType: string;
  date: string;
  featured: boolean;
  published: boolean;
  image?: string | null;
}

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
}

// Service Types
export interface Service {
  title: string;
  icon: string;
  services: string[];
}

// Process Step Types
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface AppState {
  activeFaq: number | null;
  showMobileMenu: boolean;
  showDiscoveryForm: boolean;
}

// Contact Information Types
export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  location: string;
  abn: string;
}

// Navigation Types
export type NavSection = 'services' | 'about' | 'process' | 'testimonials' | 'contact';

// Form Event Types
export type FormInputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>;