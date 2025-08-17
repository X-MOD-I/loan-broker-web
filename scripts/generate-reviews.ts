import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';

// Types for review data
interface ReviewData {
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

interface ReviewFrontmatter {
  name?: string;
  rating?: number | string;
  title?: string;
  content?: string;
  location?: string;
  loanType?: string;
  date?: string;
  featured?: boolean;
  published?: boolean;
  image?: string;
}

// Function to generate reviews.ts from markdown files
async function generateReviews(): Promise<ReviewData[]> {
  try {
    console.log('🔄 Generating reviews from markdown files...');
    
    // Get all markdown files from reviews directory
    const reviewsPattern = path.join(process.cwd(), 'src', 'data', 'reviews', '*.md').replace(/\\/g, '/');
    const markdownFiles = await glob(reviewsPattern);
    
    console.log(`📄 Found ${markdownFiles.length} review files`);
    
    // Process each markdown file
    const reviewsData: ReviewData[] = [];
    
    for (const filePath of markdownFiles) {
      try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data }: { data: ReviewFrontmatter } = matter(fileContent);
        
        // Create review object from frontmatter with type safety
        const review: ReviewData = {
          id: path.basename(filePath, '.md'),
          name: data.name || 'Anonymous',
          rating: typeof data.rating === 'string' ? parseInt(data.rating) : (data.rating || 5),
          title: data.title || '',
          content: data.content || '',
          location: data.location || '',
          loanType: data.loanType || '',
          date: data.date || new Date().toISOString(),
          featured: Boolean(data.featured),
          published: data.published !== false, // Default to true if not specified
          image: data.image || null
        };
        
        // Validate required fields
        if (!review.name || !review.content) {
          console.warn(`⚠️  Skipping ${filePath}: Missing required fields (name or content)`);
          continue;
        }
        
        // Validate rating range
        if (review.rating < 1 || review.rating > 5) {
          console.warn(`⚠️  Invalid rating ${review.rating} for ${review.name}, defaulting to 5`);
          review.rating = 5;
        }
        
        // Only include published reviews
        if (review.published) {
          reviewsData.push(review);
          console.log(`✅ Processed: ${review.name} (${review.rating} stars)`);
        } else {
          console.log(`⏭️  Skipped unpublished: ${review.name}`);
        }
      } catch (error) {
        console.warn(`⚠️  Error processing ${filePath}:`, (error as Error).message);
      }
    }
    
    // Sort reviews by date (newest first)
    reviewsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Generate the TypeScript file content
    const tsContent = `// Auto-generated from markdown files - DO NOT EDIT MANUALLY
// This file is automatically updated when you add reviews via CMS
// Last updated: ${new Date().toISOString()}

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

export const reviewsData: ReviewData[] = ${JSON.stringify(reviewsData, null, 2)};

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
`;
    
    // Write the generated file
    const outputPath = path.join(process.cwd(), 'src/utils/reviews.ts');
    await fs.writeFile(outputPath, tsContent, 'utf8');
    
    console.log(`🎉 Successfully generated reviews.ts with ${reviewsData.length} published reviews`);
    console.log(`📝 Reviews file updated: ${outputPath}`);
    
    return reviewsData;
  } catch (error) {
    console.error('❌ Error generating reviews:', error);
    throw error;
  }
}

// Run the script if called directly
if (require.main === module) {
  generateReviews()
    .then(reviews => {
      console.log(`\n✨ Done! ${reviews.length} reviews ready for your website.`);
      process.exit(0);
    })
    .catch(error => {
      console.error('\n💥 Failed to generate reviews:', error);
      process.exit(1);
    });
}

export = generateReviews;
