// Loan Application Form Types
export interface LoanFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanType: string;
  loanAmount: string;
  purpose: string;
  employment: string;
  income: string;
}

// Testimonial Types
export interface Testimonial {
  name: string;
  text: string;
  stars: number;
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

// Component Props Types
export interface LoanApplicationFormProps {
  onClose: () => void;
}

export interface AppState {
  activeFaq: number | null;
  showApplicationForm: boolean;
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

// Loan Types Enum
export enum LoanType {
  HOME_LOAN = 'home-loan',
  REFINANCING = 'refinancing',
  INVESTMENT_PROPERTY = 'investment-property',
  PERSONAL_LOAN = 'personal-loan',
  BUSINESS_LOAN = 'business-loan',
  COMMERCIAL_LOAN = 'commercial-loan',
  CAR_LOAN = 'car-loan'
}

// Employment Status Enum
export enum EmploymentStatus {
  FULL_TIME = 'full-time',
  PART_TIME = 'part-time',
  SELF_EMPLOYED = 'self-employed',
  CONTRACTOR = 'contractor',
  BUSINESS_OWNER = 'business-owner',
  RETIRED = 'retired',
  OTHER = 'other'
} 