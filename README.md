# Chop Loans Website

A modern, responsive website for Ankush Chopra's loan brokerage business in Melbourne, Australia. Built with React and designed to be mobile-friendly.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Service Showcase**: Complete loan services including mortgage, business, and personal loans
- **Interactive FAQ**: Expandable FAQ section for common questions  
- **Customer Testimonials**: Social proof from satisfied customers
- **Contact Integration**: Direct phone and email links
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Services Offered

### Mortgage Loans
- First-time Home Buyers Loans
- Home Loan Refinancing
- Investment Property Loans
- Offset Account Loans

### Business Loans
- Commercial Loans
- Equipment Finance
- Business Vehicle Loans
- Development Finance

### Personal Loans
- Secured & Unsecured Loans
- Short-Term Loans
- Car Loans
- Temporary Visa Loans

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd choploans-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder. The build is minified and ready for deployment.

## Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure custom domain: `choploans.com.au`

### Other Hosting Options
- Vercel
- GitHub Pages  
- AWS S3 + CloudFront
- Traditional web hosting (upload build folder contents)

## Customization

### Branding
- Logo: Update in `src/App.js` (line 92)
- Colors: Modify CSS variables in `src/App.css`
- Contact Info: Update phone/email in footer and contact sections

### Content
- Services: Edit service arrays in `src/App.js`
- Testimonials: Update testimonials array (line 13)
- FAQ: Modify faqs array (line 42)
- About Section: Update founder information (line 189)

### Styling
- Main styles: `src/App.css`
- Global styles: `src/index.css`
- Mobile breakpoints: 768px and 480px

## Contact Information

**Ankush Chopra**  
Email: ankush@choploans.com.au  
Phone: +61 400 000 000  
Website: choploans.com.au  
Location: Melbourne, Victoria

## License

This project is proprietary and confidential. All rights reserved. 