// Auto-generated from markdown files - DO NOT EDIT MANUALLY
// This file is automatically updated when you add reviews via CMS
// Last updated: 2025-09-06T06:50:54.815Z

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

export const reviewsData: ReviewData[] = [
  {
    "id": "2025-08-17-wow",
    "name": "Garima Wahi",
    "rating": 5,
    "title": "Wow",
    "content": "Amazing Service!",
    "location": "",
    "loanType": "Refinancing",
    "date": "2025-08-17T10:58:00.000Z",
    "featured": true,
    "published": true,
    "image": null
  },
  {
    "id": "2024-03-10-maria-refinancing",
    "name": "Maria K.",
    "rating": 5,
    "title": "Saved thousands on refinancing",
    "content": "After feeling stuck with our current lender, Chop Loans helped us refinance and save over $300 per month. The process was straightforward and they kept us informed every step of the way.",
    "location": "Brisbane, QLD",
    "loanType": "Refinancing",
    "date": "2024-03-10T09:15:00.000Z",
    "featured": true,
    "published": true,
    "image": null
  },
  {
    "id": "2024-02-03-james-investment",
    "name": "James L.",
    "rating": 5,
    "title": "Great investment loan advice",
    "content": "As a first-time investor, I was nervous about getting an investment loan. The team explained everything clearly and secured me a competitive rate. Their knowledge of the investment property market is impressive.",
    "location": "Sydney, NSW",
    "loanType": "Investment Loan",
    "date": "2024-02-03T14:20:00.000Z",
    "featured": false,
    "published": true,
    "image": null
  },
  {
    "id": "2024-01-15-sarah-melbourne",
    "name": "Dipanshu Modi",
    "rating": 5,
    "title": "Exceptional service and expertise!",
    "content": "Maza aaya!!",
    "location": "Melbourne, VIC",
    "loanType": "Home Loan",
    "date": "2024-01-15T10:30:00.000Z",
    "featured": true,
    "published": true,
    "image": null
  }
];

// Get all published reviews
export const getPublishedReviews = (): ReviewData[] => {
  return reviewsData.filter(review => review.published);
};

// Get featured reviews
export const getFeaturedReviews = (): ReviewData[] => {
  return reviewsData.filter(review => review.published && review.featured);
};

// Get reviews by rating
export const getReviewsByRating = (rating: number): ReviewData[] => {
  return reviewsData.filter(review => review.published && review.rating === rating);
};

// Get reviews by loan type
export const getReviewsByLoanType = (loanType: string): ReviewData[] => {
  return reviewsData.filter(review => review.published && review.loanType === loanType);
};

// Get latest reviews
export const getLatestReviews = (count: number = 5): ReviewData[] => {
  return reviewsData
    .filter(review => review.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

// Format date for display
export const formatReviewDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
