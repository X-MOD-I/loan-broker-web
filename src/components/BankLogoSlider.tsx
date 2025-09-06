import React, { useState } from 'react';
import './BankLogoSlider.css';
import { lendersWithLogos, allLenders } from '../data/simpleLenders';
import { BankLogo } from '../types';

const BankLogoSlider: React.FC = () => {
  const [showFullList, setShowFullList] = useState(false);
  
  // Convert lenders with logos to BankLogo format for the slider
  const bankLogos: BankLogo[] = lendersWithLogos.map(lender => ({
    name: lender.name,
    src: lender.logoPath || '',
    alt: lender.name
  }));

  // Get lenders without logos for the collapsible list
  const lendersWithoutLogos = allLenders.filter(lender => !lender.hasLogo);

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

              {/* Arrow down to expand full lender list */}
              <div className="expand-lenders-section">
                <button 
                  className="expand-lenders-btn"
                  onClick={() => setShowFullList(!showFullList)}
                  aria-expanded={showFullList}
                >
                  <span>View All {allLenders.length} Lenders</span>
                  <span className={`arrow ${showFullList ? 'up' : 'down'}`}>
                    {showFullList ? '↑' : '↓'}
                  </span>
                </button>
              </div>

              {/* Clean modern lender list */}
              {showFullList && (
                <div className="modern-lender-list">
                  <h3>All Our Lenders ({allLenders.length})</h3>
                  <div className="lender-grid-modern">
                    {allLenders.map((lender) => (
                      <div key={lender.id} className="lender-item-modern">
                        {lender.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankLogoSlider;