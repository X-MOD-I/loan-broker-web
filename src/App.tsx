import React, { useState } from 'react';
import './App.css';
import './components/HeaderStyles.css';

import BankLogoSlider from './components/BankLogoSlider';
import DiscoveryCallForm from './components/DiscoveryCallForm';

import { Testimonial, FAQ, AppState } from './types';

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



  const testimonials: Testimonial[] = [
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
      answer: "Applying for a loan is simple: Visit our website and navigate to the relevant loan section, Complete the online pre-approval form with your personal and financial information, Submit the application and receive a decision, often within 24-48 hours, If approved, review and accept the loan terms, Receive your funds directly into your bank account."
    },
    {
      question: "What is the interest rate on loans?",
      answer: "Interest rates on loans vary based on your credit score, income, loan amount, and loan type. We offer competitive rates, and the exact rate will be provided during the loan approval process. All our pre-approval forms are credit check free."
    },
    {
      question: "How long does the loan approval process take?",
      answer: "Our average processing time is less than 48 hours on successful document submissions. Pre-approval can often be obtained within 24 hours, and once you choose your lender and submit required documents, funds are typically available within 24-48 hours."
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

          <div className="header-right">
            <button 
              onClick={() => setState(prev => ({...prev, showDiscoveryForm: true}))}
              className="header-cta-btn"
            >
              Free 30-Min Discovery Call
            </button>
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
          <h1>Unlock Your Financial Goals with Melbourne's Premier Brokerage</h1>
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
          <h2 className="section-title">Our Best Selling Products</h2>
          <p style={{textAlign: 'center', marginBottom: '4rem', color: '#64748b', fontSize: '1.2rem', fontWeight: '500', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 4rem'}}>
            These are our best selling services, but you can still fill the pre-approval form. All our forms are credit-score free. If you still have any doubt, please talk to an Expert.
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>🏠 Mortgage Loans</h3>
              <ul className="service-list">
                <li>First-time Home Buyers Loans</li>
                <li>Home Loans</li>
                <li>Home Loan Refinancing</li>
                <li>Investment Property Loans</li>
                <li>Offset Account Loans</li>
                <li>Standard & Basic Variable Loans</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>🏢 Business Loans</h3>
              <ul className="service-list">
                <li>Asset Finance Loan</li>
                <li>Commercial Loan</li>
                <li>Secured Business Loans</li>
                <li>Commercial Property Loans</li>
                <li>Equipment Finance Loans</li>
                <li>Business Vehicle Loan</li>
                <li>Development Finance Loan</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>👤 Personal Loans</h3>
              <ul className="service-list">
                <li>Personal Loans</li>
                <li>Refinancing Personal Loan</li>
                <li>Temporary Visa Loan</li>
                <li>Short-Term Loan</li>
                <li>Car or Motorbike Loan</li>
                <li>Secured & Unsecured Loans</li>
                <li>Guarantor Loans</li>
              </ul>
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
            Our Loan Application process is designed keeping humans in mind. We made the process very simple, credit-check free, and for fast outcomes on applications. Our average processing time is less than 48hrs on successful document submissions.
          </p>
          
          <div className="process-steps">
            <div className="process-step">
              <img src="/images/process/preapprovalform.svg" alt="Pre-approval Form" className="step-icon" />
              <h3>Pre-approval Form</h3>
              <p>All our Pre-Approval forms are Credit Check free. Get started with no impact on your credit score.</p>
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
              <p>Then in 24-48hrs you receive the funds in your bank account. Simple and fast!</p>
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