import React from 'react';
import './BankLogoSlider.css';

const BankLogoSlider: React.FC = () => {
  const bankLogos = [
    {
      name: 'Commonwealth Bank',
      src: '/images/logos/commbank.png',
      alt: 'Commonwealth Bank of Australia'
    },
    {
      name: 'NAB',
      src: '/images/logos/nab.png',
      alt: 'National Australia Bank'
    },
    {
      name: 'ANZ',
      src: '/images/logos/anz.png',
      alt: 'Australia and New Zealand Banking Group'
    },
    {
      name: 'Westpac',
      src: '/images/logos/westpac.png',
      alt: 'Westpac Banking Corporation'
    },
    {
      name: 'ING Bank',
      src: '/images/logos/ing-bank.png',
      alt: 'ING Bank Australia'
    },
    {
      name: 'Macquarie Bank',
      src: '/images/logos/macquarie-bank.png',
      alt: 'Macquarie Bank'
    },
    {
      name: 'ME Bank',
      src: '/images/logos/me-bank.png',
      alt: 'ME Bank'
    },
    {
      name: 'Bankwest',
      src: '/images/logos/bankwest.png',
      alt: 'Bankwest'
    },
    {
      name: 'Bank of Melbourne',
      src: '/images/logos/bank-of-melbourne.png',
      alt: 'Bank of Melbourne'
    },
    {
      name: 'Virgin Money',
      src: '/images/logos/virgin-money.png',
      alt: 'Virgin Money Australia'
    },
    {
      name: 'Suncorp',
      src: '/images/logos/suncope.png',
      alt: 'Suncorp Bank'
    },
    {
      name: 'Pepper Money',
      src: '/images/logos/pepper-money.png',
      alt: 'Pepper Money'
    },
    {
      name: 'Connective',
      src: '/images/logos/connective-home-loan.png',
      alt: 'Connective Home Loans'
    }
  ];

  return (
    <div className="logo-slide-section">
      <section className="section-logo">
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical padding-xxlarge">
              <h2 className="section-title" style={{ marginBottom: '1rem', color: '#1f2937', textAlign: 'center' }}>
                Our Trusted Lending Partners
              </h2>
              <p style={{ 
                textAlign: 'center', 
                marginBottom: '4rem', 
                color: '#6b7280', 
                fontSize: '1.1rem', 
                fontWeight: '500', 
                lineHeight: '1.6', 
                maxWidth: '800px', 
                margin: '0 auto 4rem'
              }}>
                We work with Australia's most trusted financial institutions to secure the best rates and terms for our clients.
              </p>
              <div className="logo-slider-container">
                <div className="logo-component-slider">
                  {bankLogos.map((logo, index) => (
                    <div key={logo.name} className="logo-item">
                      <img
                        src={logo.src}
                        loading="lazy"
                        alt={logo.alt}
                        className="logo-slider-img"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.nextSibling) {
                            (target.nextSibling as HTMLElement).style.display = 'block';
                          }
                        }}
                      />
                      <div className="logo-fallback" style={{ display: 'none' }}>
                        {logo.name}
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {bankLogos.map((logo, index) => (
                    <div key={`${logo.name}-duplicate`} className="logo-item">
                      <img
                        src={logo.src}
                        loading="lazy"
                        alt={logo.alt}
                        className="logo-slider-img"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.nextSibling) {
                            (target.nextSibling as HTMLElement).style.display = 'block';
                          }
                        }}
                      />
                      <div className="logo-fallback" style={{ display: 'none' }}>
                        {logo.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankLogoSlider;