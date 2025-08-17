import React, { useState } from 'react';
import './App.css';
import './components/HeaderStyles.css';

import BankLogoSlider from './components/BankLogoSlider';
import DiscoveryCallForm from './components/DiscoveryCallForm';

import { Testimonial, FAQ, AppState } from './types';
import { getPublishedReviews } from './utils/reviews';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    activeFaq: null,
    showMobileMenu: false,
    showDiscoveryForm: false
  });

  const toggleFaq = (index: number): void => {
    setState(prev => ({
      ...prev,
      activeFaq: prev.activeFaq === index ? null : index
    }));
  };



  // Get testimonials from CMS data
  const cmsReviews = getPublishedReviews();
  
  // Convert CMS reviews to testimonial format
  const cmsTestimonials: Testimonial[] = cmsReviews.map(review => ({
    name: review.name,
    text: review.content,
    stars: review.rating
  }));

  // Fallback testimonials if no CMS data is available
  const fallbackTestimonials: Testimonial[] = [
    {
      name: "Sarah Mitchell",
      text: "Ankush was more than a broker, very professional and truthful. He was able to guide me through the loan application process right till the settlement. Deserve my 5 star.",
      stars: 5
    },
    {
      name: "David Thompson",
      text: "Friendly, professional and trustworthy. Ankush has good market knowledge and expertise in his field. Definitely recommend his service to anyone looking for home loan or refinance.",
      stars: 5
    },
    {
      name: "Maria Rodriguez",
      text: "I recently had the pleasure of working with Chop Loans to secure a financial package for my second house, and I couldn't be happier with the overall experience. From the moment I contacted Ankush, his team displayed a professionalism and expertise that immediately put me at ease.",
      stars: 5
    },
    {
      name: "James Wilson",
      text: "LEGEND in the market. Very professional team. All the information given at the start was accurate. Nothing hidden. 5 stars ⭐️",
      stars: 5
    },
    {
      name: "Emily Chen",
      text: "Highly recommend Chop Loans service. Recently I have done my house refinance and Ankush was not only able to get me best interest rate in the market but also 2K cash back on the top. Cannot ask for more than that plus very quick service.",
      stars: 5
    },
    {
      name: "Michael Brown",
      text: "Ankush made this a seamless and hassle free experience. Very knowledgeable and supportive along the whole way. He got me a great deal, even in this time of high interest rates. Can't recommend highly enough!!",
      stars: 5
    }
  ];

  // Use CMS testimonials if available, otherwise use fallback
  const testimonials = cmsTestimonials.length > 0 ? cmsTestimonials : fallbackTestimonials;

  const faqs: FAQ[] = [
    {
      question: "What is Chop Loans?",
      answer: "Chop Loans is a comprehensive financial services platform offering a range of products, including personal loans, home loans, business loans, and financial advisory services. Our goal is to help individuals and families achieve financial stability and growth through tailored financial solutions."
    },
    {
      question: "What services does Chop Loans offer?",
      answer: "We offer a variety of financial services, including: Personal loans, Home loans and refinancing, Business and commercial loans, Debt consolidation, Financial planning and advisory, Credit repair assistance, Financial education resources, and Budgeting tools and resources."
    },
    {
      question: "How do I apply for a loan with Chop Loans?",
      answer: "Applying for a loan is simple: Contact us through our website or call for a free consultation, Discuss your financial goals and loan requirements with our expert broker, We'll compare options from multiple lenders to find the best fit, Complete the application with your chosen lender, Receive your funds directly into your bank account once approved."
    },
    {
      question: "What is the interest rate on loans?",
      answer: "Interest rates vary based on your credit score, income, loan amount, and loan type. As a broker, we compare rates from multiple lenders to secure the most competitive options for your situation. The exact rate will be provided during the application process with your chosen lender."
    },
    {
      question: "How long does the loan approval process take?",
      answer: "Processing times vary by lender and loan type. As your broker, we work to streamline the process and keep you informed at every step. Most applications are reviewed within a few business days, and funding timeframes depend on the specific lender's policies and loan complexity."
    }
  ];

  const renderStars = (count: number): string => {
    return '⭐'.repeat(count);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Clean Header */}
      <header className="header">
        <nav className="nav-container">
                          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
                  <img src="/images/logos/logo.png" alt="Chop Loans" className="logo-image" />
                </a>
          
          <ul className="nav-menu">
            <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#process" onClick={(e) => handleNavClick(e, 'process')}>Process</a></li>
            <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Reviews</a></li>
          </ul>

          <div className="header-phone">
            <a href="tel:+61489210002" className="phone-link">
              <span className="phone-icon"></span>
              <span className="phone-number">0489 210 002</span>
            </a>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setState(prev => ({...prev, showMobileMenu: !prev.showMobileMenu}))}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </nav>

        {state.showMobileMenu && (
          <div className="mobile-nav">
            <a href="#services" onClick={(e) => { handleNavClick(e, 'services'); setState(prev => ({...prev, showMobileMenu: false})); }}>Services</a>
            <a href="#about" onClick={(e) => { handleNavClick(e, 'about'); setState(prev => ({...prev, showMobileMenu: false})); }}>About</a>
            <a href="#process" onClick={(e) => { handleNavClick(e, 'process'); setState(prev => ({...prev, showMobileMenu: false})); }}>Process</a>
            <a href="#testimonials" onClick={(e) => { handleNavClick(e, 'testimonials'); setState(prev => ({...prev, showMobileMenu: false})); }}>Reviews</a>
            <a href="tel:+61489210002" className="mobile-phone-link">
              📞 Call 0489 210 002
            </a>
            <div className="mobile-cta">
              <button 
                onClick={() => {
                  setState(prev => ({...prev, showDiscoveryForm: true, showMobileMenu: false}));
                }}
                className="mobile-cta-btn"
              >
                Free 30-Min Discovery Call
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <h1>Chop Chop Loans – Fast, Fair & Always There</h1>
          <p>Melbourne's Top Brokerage - Tailored Solutions for Your Financial Journey with Ankush Chopra!</p>
          <div className="hero-cta-buttons">
            <button 
              onClick={() => setState(prev => ({...prev, showDiscoveryForm: true}))} 
              className="cta-button primary"
            >
                                  Book Free 30-Min Discovery Call
            </button>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-container">
          <h2 className="section-title">Our Lending Services Include</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <span>🏠</span>
              </div>
              <h3>Home Loans</h3>
              <div className="service-items">
                <span className="service-item">1st Home Buyers</span>
                <span className="service-item">Construction Loans</span>
                <span className="service-item">Bridging Loans</span>
                <span className="service-item">Upgrading/Downsizing</span>
                <span className="service-item">Self Employed</span>
              </div>
              <button 
                className="service-btn"
                onClick={() => setState(prev => ({...prev, showDiscoveryForm: true}))}
              >
                Learn More →
              </button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <span>📈</span>
              </div>
              <h3>Investments</h3>
              <div className="service-items">
                <span className="service-item">Tax Effective Loan Structure for Investment Property Loans</span>
                <span className="service-item">SMSF</span>
              </div>
              <button 
                className="service-btn"
                onClick={() => setState(prev => ({...prev, showDiscoveryForm: true}))}
              >
                Learn More →
              </button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <span>🔄</span>
              </div>
              <h3>Refinance</h3>
              <div className="service-items">
                <span className="service-item">Analysis of current loans</span>
                <span className="service-item">Comparison of other possible options, with consideration of desired goals and outcomes</span>
                <span className="service-item">Debt Consolidation</span>
              </div>
              <button 
                className="service-btn"
                onClick={() => setState(prev => ({...prev, showDiscoveryForm: true}))}
              >
                Learn More →
              </button>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <span>💼</span>
              </div>
              <h3>Other</h3>
              <div className="service-items">
                <span className="service-item">Vehicle Finance</span>
                <span className="service-item">Personal Loans</span>
                <span className="service-item">Debt Consolidation</span>
              </div>
              <button 
                className="service-btn"
                onClick={() => setState(prev => ({...prev, showDiscoveryForm: true}))}
              >
                Learn More →
              </button>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); setState(prev => ({...prev, showDiscoveryForm: true})); }}>Explore All Options</a>
          </div>
        </div>
      </section>

      {/* Bank Logo Slider Section */}
      <BankLogoSlider />

      {/* Process Section */}
      <section id="process" className="process">
        <div className="process-container">
          <h2 className="section-title">Our Process for Applying for Loan</h2>
          <p style={{textAlign: 'center', marginBottom: '3rem', color: '#64748b', fontSize: '1.1rem'}}>
            Our loan brokerage process is designed with you in mind. We simplify the complex world of lending by comparing multiple lenders to find the best options for your unique situation. Professional, transparent, and focused on getting you the right loan.
          </p>
          
          <div className="process-steps">
            <div className="process-step">
              <img src="/images/process/preapprovalform.svg" alt="Initial Consultation" className="step-icon" />
              <h3>Initial Consultation</h3>
              <p>Start with a free consultation to discuss your financial goals and loan requirements with our expert broker.</p>
            </div>

            <div className="process-step">
              <img src="/images/process/compareloan.svg" alt="Compare Loans" className="step-icon" />
              <h3>Comparing Loans</h3>
              <p>Once we receive your form, we assess and get you several options to choose from with competitive rates.</p>
            </div>

            <div className="process-step">
              <img src="/images/process/submitloan.svg" alt="Submit Documents" className="step-icon" />
              <h3>Submit Documents</h3>
              <p>Once you choose your lender, we ask you to submit the required documents for final approval.</p>
            </div>

            <div className="process-step">
              <img src="/images/process/done-deal.svg" alt="Loan Approved" className="step-icon" />
              <h3>Loan Deposit</h3>
              <p>Once approved, funds will be deposited to your account according to the lender's standard timeframes. Professional and reliable!</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              Chop Loans is a rapidly growing financial brokerage company dedicated to helping individuals and businesses achieve their financial goals. We offer a wide range of services, including personal loans, home loans, business loans, and financial planning.
            </p>
            <p>
              Our commitment to providing competitive rates, flexible terms, and expert financial advice sets us apart in the industry. Whether you're looking to manage debt, plan for the future, or secure financing for major purchases, Chop Loans is your trusted partner in financial success.
            </p>
            <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); setState(prev => ({...prev, showDiscoveryForm: true})); }}>Learn More About Us</a>
          </div>

          <div className="founder-info">
            <h3>Meet Your Broker</h3>
            <h4 style={{color: '#1e293b', marginBottom: '1rem'}}>Ankush Chopra</h4>
            <p style={{color: '#64748b', marginBottom: '1rem'}}>
              With over a decade of experience in the financial sector, Ankush Chopra has built Chop Loans with a focus on innovation, customer-centric solutions, and sustainable growth.
            </p>
            <p style={{color: '#64748b'}}>
              His commitment to helping clients navigate their financial journeys and expertise in the Melbourne market continues to drive the company's success and excellent customer satisfaction rates.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="testimonials-container">
          <h2 className="section-title">Words of Appreciation from Our Valued Customers!!</h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {renderStars(testimonial.stars)}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">- {testimonial.name}</div>
                <span className="testimonial-logo-badge">
                  <img src="/images/logos/logo.png" alt="Chop Loans" className="testimonial-logo-img" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="faq-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p style={{textAlign: 'center', marginBottom: '3rem', color: '#64748b', fontSize: '1.1rem'}}>
            The Quickest way to get around Your Questions!
          </p>
          
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={state.activeFaq === index}
                type="button"
              >
                {faq.question}
                <span>{state.activeFaq === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${state.activeFaq === index ? '' : 'hidden'}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact section removed per request; contact available via header button */}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Mortgage Loans</h3>
              <ul>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>First time home buyers Loans</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Standard Variable Loans</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Basic Variable Loans</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Investment Property Loans</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Offset Account Loans</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Personal Loans</h3>
              <ul>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Secured & Unsecured Loans</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Short Term Loans</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Temporary Visa Loans</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Guarantor Loans</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Low Doc Loans</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Business Loans</h3>
              <ul>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Development Finance Loan</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Merchant Cash Advance</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Secured Business Loan</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Commercial Property Loan</a></li>
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Equipment Finance Loan</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Info</h3>
              <ul>
                <li><a href="tel:+61400000000">Phone: +61 400 000 000</a></li>
                <li><a href="mailto:ankush@choploans.com.au">Email: ankush@choploans.com.au</a></li>
                <li>Melbourne, Victoria</li>
                <li><a href="https://choploans.com.au">www.choploans.com.au</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Chop Loans. All rights reserved. | ABN: 12 345 678 901</p>
          </div>
        </div>
      </footer>

      {/* Discovery Call Form Modal */}
      {state.showDiscoveryForm && (
        <DiscoveryCallForm onClose={() => setState(prev => ({ ...prev, showDiscoveryForm: false }))} />
      )}

    </div>
  );
};

export default App; 