export interface Lender {
  id: string;
  name: string;
  contactInfo: string;
  category: 'major-bank' | 'regional-bank' | 'credit-union' | 'non-bank' | 'specialist' | 'commercial' | 'asset-finance' | 'personal-finance' | 'other';
  logoPath?: string;
  hasLogo: boolean;
  services: string[];
  description?: string;
}

export const lenders: Lender[] = [
  // Major Banks
  {
    id: 'anz',
    name: 'ANZ',
    contactInfo: '13320-784',
    category: 'major-bank',
    logoPath: '/images/logos/anz.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Business Loans', 'Investment Loans'],
    description: 'One of Australia\'s big four banks offering comprehensive banking solutions.'
  },
  {
    id: 'cba',
    name: 'Commonwealth Bank (CBA)',
    contactInfo: 'ABD77',
    category: 'major-bank',
    logoPath: '/images/logos/commbank.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Business Loans', 'Investment Loans'],
    description: 'Australia\'s largest bank providing full-service banking solutions.'
  },
  {
    id: 'nab',
    name: 'NAB',
    contactInfo: '84086',
    category: 'major-bank',
    logoPath: '/images/logos/nab.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Business Loans', 'Investment Loans'],
    description: 'National Australia Bank offering competitive rates and comprehensive services.'
  },
  {
    id: 'westpac',
    name: 'Westpac',
    contactInfo: 'I3161991',
    category: 'major-bank',
    logoPath: '/images/logos/westpac.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Business Loans', 'Investment Loans'],
    description: 'One of Australia\'s oldest banks with a strong lending portfolio.'
  },

  // Regional Banks
  {
    id: 'bankwest',
    name: 'Bankwest',
    contactInfo: 'bk08341443',
    category: 'regional-bank',
    logoPath: '/images/logos/bankwest.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Business Loans'],
    description: 'Western Australian-based bank offering competitive home loan solutions.'
  },
  {
    id: 'bank-of-melbourne',
    name: 'Bank of Melbourne',
    contactInfo: '178955',
    category: 'regional-bank',
    logoPath: '/images/logos/bank-of-melbourne.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Business Loans'],
    description: 'Melbourne-focused banking with personalized service and competitive rates.'
  },
  {
    id: 'banksa',
    name: 'BankSA',
    contactInfo: '178955',
    category: 'regional-bank',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Business Loans'],
    description: 'South Australian bank offering local expertise and competitive rates.'
  },
  {
    id: 'st-george',
    name: 'St George',
    contactInfo: '178955',
    category: 'regional-bank',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Business Loans'],
    description: 'Established Australian bank with strong home lending focus.'
  },
  {
    id: 'suncorp',
    name: 'Suncorp',
    contactInfo: 'A064661',
    category: 'regional-bank',
    logoPath: '/images/logos/suncope.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Business Loans', 'Insurance'],
    description: 'Queensland-based bank and insurance group offering integrated financial services.'
  },

  // Specialist Lenders
  {
    id: 'ing',
    name: 'ING',
    contactInfo: '3162254',
    category: 'specialist',
    logoPath: '/images/logos/ing-bank.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Savings'],
    description: 'Dutch-owned bank known for competitive online banking and home loans.'
  },
  {
    id: 'macquarie-bank',
    name: 'Macquarie Bank',
    contactInfo: '415857',
    category: 'specialist',
    logoPath: '/images/logos/macquarie-bank.png',
    hasLogo: true,
    services: ['Home Loans', 'Investment Loans', 'Business Loans', 'Asset Finance'],
    description: 'Investment bank offering sophisticated financial solutions.'
  },
  {
    id: 'me-bank',
    name: 'ME Bank',
    contactInfo: '1005404938',
    category: 'specialist',
    logoPath: '/images/logos/me-bank.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Transaction Accounts'],
    description: 'Customer-owned bank focused on fair banking and competitive rates.'
  },
  {
    id: 'virgin-money',
    name: 'Virgin Money',
    contactInfo: '',
    category: 'specialist',
    logoPath: '/images/logos/virgin-money.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Credit Cards'],
    description: 'Innovative bank offering competitive rates and excellent customer service.'
  },

  // Non-Bank Lenders
  {
    id: 'pepper-money',
    name: 'Pepper Money',
    contactInfo: '070000835',
    category: 'non-bank',
    logoPath: '/images/logos/pepper-money.png',
    hasLogo: true,
    services: ['Home Loans', 'Personal Loans', 'Asset Finance', 'Motor Finance'],
    description: 'Specialist non-bank lender offering flexible lending solutions.'
  },
  {
    id: 'liberty-fs',
    name: 'Liberty Financial Services',
    contactInfo: 'CAPC8145',
    category: 'non-bank',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Asset Finance', 'Motor Finance'],
    description: 'Non-bank lender specializing in flexible and alternative lending solutions.'
  },
  {
    id: 'firstmac',
    name: 'Firstmac',
    contactInfo: '71403',
    category: 'non-bank',
    hasLogo: false,
    services: ['Home Loans', 'Investment Loans', 'Asset Finance'],
    description: 'Established non-bank lender offering competitive home loan solutions.'
  },
  {
    id: 'resimac',
    name: 'Resimac',
    contactInfo: '52539',
    category: 'non-bank',
    hasLogo: false,
    services: ['Home Loans', 'Investment Loans', 'Asset Finance'],
    description: 'Non-bank lender focusing on prime and specialist residential lending.'
  },
  {
    id: 'la-trobe',
    name: 'La Trobe Financial',
    contactInfo: '3184792',
    category: 'non-bank',
    hasLogo: false,
    services: ['Home Loans', 'Investment Loans', 'Commercial Loans'],
    description: 'Specialist lender offering flexible residential and commercial solutions.'
  },

  // Credit Unions and Mutual Banks
  {
    id: 'bendigo-bank',
    name: 'Bendigo Bank',
    contactInfo: '135464',
    category: 'credit-union',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Business Loans'],
    description: 'Community bank offering personalized service and competitive rates.'
  },
  {
    id: 'great-southern-bank',
    name: 'Great Southern Bank',
    contactInfo: '9471081',
    category: 'credit-union',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Business Loans'],
    description: 'Customer-owned bank focused on member benefits and competitive rates.'
  },
  {
    id: 'heritage',
    name: 'Heritage Bank',
    contactInfo: '3833',
    category: 'credit-union',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Business Loans'],
    description: 'Mutual bank offering competitive rates and personalized service.'
  },
  {
    id: 'australian-military-bank',
    name: 'Australian Military Bank',
    contactInfo: '',
    category: 'credit-union',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Savings'],
    description: 'Mutual bank serving military personnel and their families.'
  },
  {
    id: 'firefighters-mutual-bank',
    name: 'Firefighters Mutual Bank',
    contactInfo: '',
    category: 'credit-union',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Savings'],
    description: 'Mutual bank serving firefighters and emergency services personnel.'
  },
  {
    id: 'teachers-mutual-bank',
    name: 'Teachers Mutual Bank',
    contactInfo: '',
    category: 'credit-union',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Education Loans'],
    description: 'Mutual bank serving education professionals and their families.'
  },
  {
    id: 'health-professionals-bank',
    name: 'Health Professionals Bank',
    contactInfo: '',
    category: 'credit-union',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Professional Loans'],
    description: 'Bank specializing in financial solutions for healthcare professionals.'
  },

  // Additional Banks and Financial Institutions
  {
    id: 'bank-of-china',
    name: 'Bank of China',
    contactInfo: 'At bank 29/04/2025',
    category: 'major-bank',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Business Loans', 'Foreign Exchange'],
    description: 'International bank offering comprehensive banking services in Australia.'
  },
  {
    id: 'bank-of-queensland',
    name: 'Bank of Queensland',
    contactInfo: '',
    category: 'regional-bank',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Business Loans'],
    description: 'Queensland-based bank offering competitive banking solutions nationwide.'
  },
  {
    id: 'bank-of-sydney',
    name: 'Bank of Sydney',
    contactInfo: 'BOSFIN4169',
    category: 'regional-bank',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Business Loans'],
    description: 'Sydney-based bank focusing on personalized banking solutions.'
  },
  {
    id: 'auswide-bank',
    name: 'Auswide Bank',
    contactInfo: 'A14897',
    category: 'regional-bank',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Rural Finance'],
    description: 'Regional bank with strong focus on rural and regional communities.'
  },
  {
    id: 'hsbc',
    name: 'HSBC Bank',
    contactInfo: 'FS1723',
    category: 'major-bank',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Business Loans', 'International Banking'],
    description: 'Global bank offering international banking expertise and solutions.'
  },
  {
    id: 'amp-bank',
    name: 'AMP Bank',
    contactInfo: '1377783',
    category: 'specialist',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'SMSF Loans'],
    description: 'Financial services group offering banking and wealth management solutions.'
  },
  {
    id: 'ubank',
    name: 'UBank',
    contactInfo: 'FIN58382',
    category: 'specialist',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Savings'],
    description: 'Digital bank offering competitive rates and online banking solutions.'
  },
  {
    id: 'judo-bank',
    name: 'Judo Bank',
    contactInfo: '',
    category: 'specialist',
    hasLogo: false,
    services: ['Business Loans', 'Commercial Finance', 'Equipment Finance'],
    description: 'Specialist business bank focused on SME lending and relationship banking.'
  },

  // Specialist Finance Companies
  {
    id: 'bluestone',
    name: 'Bluestone',
    contactInfo: '172252713',
    category: 'non-bank',
    hasLogo: false,
    services: ['Home Loans', 'Personal Loans', 'Asset Finance'],
    description: 'Specialist lender offering alternative credit solutions.'
  },
  {
    id: 'latitude',
    name: 'Latitude Financial Services',
    contactInfo: '',
    category: 'non-bank',
    hasLogo: false,
    services: ['Personal Loans', 'Motor Finance', 'Credit Cards'],
    description: 'Consumer finance company offering flexible lending solutions.'
  },
  {
    id: 'plenti',
    name: 'Plenti',
    contactInfo: '',
    category: 'non-bank',
    hasLogo: false,
    services: ['Personal Loans', 'Auto Loans', 'Renewable Energy Loans'],
    description: 'Digital lender specializing in personal and auto finance.'
  },
  {
    id: 'wisr',
    name: 'WISR',
    contactInfo: 'At bank 24/03/2025',
    category: 'non-bank',
    hasLogo: false,
    services: ['Personal Loans', 'Auto Loans'],
    description: 'Digital lender using technology to provide fair and transparent loans.'
  },

  // FINSURE Network Lenders
  {
    id: 'finsure-bridge',
    name: 'FINSURE Loans BRIDGE',
    contactInfo: 'B75930',
    category: 'specialist',
    hasLogo: false,
    services: ['Bridging Finance', 'Short-term Loans'],
    description: 'Specialist bridging finance solutions through FINSURE network.'
  },
  {
    id: 'finsure-now',
    name: 'FINSURE Loans NOW',
    contactInfo: 'FinsureNOW2697',
    category: 'specialist',
    hasLogo: false,
    services: ['Fast Approval Loans', 'Personal Finance'],
    description: 'Quick approval lending solutions through FINSURE network.'
  },
  {
    id: 'finsure-thrive',
    name: 'FINSURE Loans THRIVE',
    contactInfo: 'TT13470430',
    category: 'specialist',
    hasLogo: false,
    services: ['Home Loans', 'Investment Loans', 'Commercial Loans'],
    description: 'Comprehensive lending solutions through FINSURE network.'
  },

  // Asset Finance Specialists
  {
    id: 'scotpac',
    name: 'ScotPac',
    contactInfo: 'Ankush Chopra',
    category: 'asset-finance',
    hasLogo: false,
    services: ['Asset Finance', 'Equipment Finance', 'Vehicle Finance'],
    description: 'Specialist asset and equipment finance provider.'
  },
  {
    id: 'automotive-financial-services',
    name: 'Automotive Financial Services',
    contactInfo: '',
    category: 'asset-finance',
    hasLogo: false,
    services: ['Vehicle Finance', 'Equipment Finance'],
    description: 'Specialist automotive and equipment finance provider.'
  },
  {
    id: 'autopay',
    name: 'Autopay',
    contactInfo: '',
    category: 'asset-finance',
    hasLogo: false,
    services: ['Vehicle Finance', 'Motor Finance'],
    description: 'Specialist motor vehicle finance provider.'
  },

  // Insurance and Other Services
  {
    id: 'aia-life-health',
    name: 'AIA Life and Health Insurance',
    contactInfo: 'Ankush Chopra',
    category: 'other',
    hasLogo: false,
    services: ['Life Insurance', 'Health Insurance', 'Income Protection'],
    description: 'Leading life and health insurance provider.'
  },
  {
    id: 'honey-insurance',
    name: 'Honey Insurance',
    contactInfo: 'AB5B344ED1',
    category: 'other',
    hasLogo: false,
    services: ['General Insurance', 'Home Insurance', 'Car Insurance'],
    description: 'Digital insurance provider offering competitive rates and easy claims.'
  }
];

// Utility functions for lender management
export const getLendersByCategory = (category: Lender['category']): Lender[] => {
  return lenders.filter(lender => lender.category === category);
};

export const getLendersWithLogos = (): Lender[] => {
  return lenders.filter(lender => lender.hasLogo);
};

export const searchLenders = (searchTerm: string): Lender[] => {
  const term = searchTerm.toLowerCase();
  return lenders.filter(lender => 
    lender.name.toLowerCase().includes(term) ||
    lender.services.some(service => service.toLowerCase().includes(term)) ||
    (lender.description && lender.description.toLowerCase().includes(term))
  );
};

export const getLenderById = (id: string): Lender | undefined => {
  return lenders.find(lender => lender.id === id);
};

export const getCategoryDisplayName = (category: Lender['category']): string => {
  const categoryNames: Record<Lender['category'], string> = {
    'major-bank': 'Major Banks',
    'regional-bank': 'Regional Banks',
    'credit-union': 'Credit Unions & Mutual Banks',
    'non-bank': 'Non-Bank Lenders',
    'specialist': 'Specialist Lenders',
    'commercial': 'Commercial Finance',
    'asset-finance': 'Asset Finance',
    'personal-finance': 'Personal Finance',
    'other': 'Other Services'
  };
  return categoryNames[category];
};
