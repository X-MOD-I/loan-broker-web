// Since we can't dynamically import markdown files in a static build,
// we'll create a manual registry of reviews that gets updated when new reviews are added via CMS

// This will be automatically updated by the CMS
export const reviewsData = [
  {
    id: "sarah-melbourne-2024-01-15",
    name: "Sarah M.",
    rating: 5,
    title: "Exceptional service and expertise!",
    content: "The team at Chop Loans made our home buying journey incredibly smooth. They found us a fantastic rate and handled all the paperwork efficiently. Highly recommended for anyone looking for a mortgage broker who truly cares about their clients.",
    location: "Melbourne, VIC",
    loanType: "Home Loan",
    date: "2024-01-15T10:30:00.000Z",
    featured: true,
    published: true
  },
  {
    id: "james-investment-2024-02-03",
    name: "James L.",
    rating: 5,
    title: "Great investment loan advice",
    content: "As a first-time investor, I was nervous about getting an investment loan. The team explained everything clearly and secured me a competitive rate. Their knowledge of the investment property market is impressive.",
    location: "Sydney, NSW",
    loanType: "Investment Loan",
    date: "2024-02-03T14:20:00.000Z",
    featured: false,
    published: true
  },
  {
    id: "maria-refinancing-2024-03-10",
    name: "Maria K.",
    rating: 5,
    title: "Saved thousands on refinancing",
    content: "After feeling stuck with our current lender, Chop Loans helped us refinance and save over $300 per month. The process was straightforward and they kept us informed every step of the way.",
    location: "Brisbane, QLD",
    loanType: "Refinancing",
    date: "2024-03-10T09:15:00.000Z",
    featured: true,
    published: true
  }
];

// Get all published reviews
export const getPublishedReviews = () => {
  return reviewsData.filter(review => review.published);
};

// Get featured reviews
export const getFeaturedReviews = () => {
  return reviewsData.filter(review => review.published && review.featured);
};

// Get reviews by rating
export const getReviewsByRating = (rating) => {
  return reviewsData.filter(review => review.published && review.rating === rating);
};

// Get reviews by loan type
export const getReviewsByLoanType = (loanType) => {
  return reviewsData.filter(review => review.published && review.loanType === loanType);
};

// Get latest reviews
export const getLatestReviews = (count = 5) => {
  return reviewsData
    .filter(review => review.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

// Format date for display
export const formatReviewDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
