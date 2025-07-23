import React, { useState } from 'react';
import './LoanApplicationForm.css';

const LoanApplicationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanType: '',
    loanAmount: '',
    purpose: '',
    employment: '',
    income: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
New Loan Application from ${formData.firstName} ${formData.lastName}

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Loan Details:
- Loan Type: ${formData.loanType}
- Loan Amount: $${formData.loanAmount}
- Purpose: ${formData.purpose}
- Employment Status: ${formData.employment}
- Annual Income: $${formData.income}

Please contact this customer at your earliest convenience.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:ankush@choploans.com.au?subject=New Loan Application - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your application! Your email client will open to send the application to Ankush Chopra. If it doesn\'t open automatically, please email ankush@choploans.com.au directly.');
    
    // Close form
    onClose();
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <div className="form-header">
          <h2>Loan Pre-Application Form</h2>
          <p>Credit Check Free - Get pre-approved in 24-48 hours</p>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="loan-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="loanType">Loan Type *</label>
              <select
                id="loanType"
                name="loanType"
                required
                value={formData.loanType}
                onChange={handleChange}
              >
                <option value="">Select Loan Type</option>
                <option value="home-loan">Home Loan</option>
                <option value="refinancing">Refinancing</option>
                <option value="investment-property">Investment Property</option>
                <option value="personal-loan">Personal Loan</option>
                <option value="business-loan">Business Loan</option>
                <option value="commercial-loan">Commercial Loan</option>
                <option value="car-loan">Car Loan</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="loanAmount">Loan Amount (AUD) *</label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                required
                placeholder="e.g., 500000"
                value={formData.loanAmount}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="purpose">Purpose of Loan</label>
            <textarea
              id="purpose"
              name="purpose"
              rows="3"
              placeholder="Tell us how you plan to use this loan..."
              value={formData.purpose}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employment">Employment Status *</label>
              <select
                id="employment"
                name="employment"
                required
                value={formData.employment}
                onChange={handleChange}
              >
                <option value="">Select Employment Status</option>
                <option value="full-time">Full-time Employee</option>
                <option value="part-time">Part-time Employee</option>
                <option value="self-employed">Self-employed</option>
                <option value="contractor">Contractor</option>
                <option value="business-owner">Business Owner</option>
                <option value="retired">Retired</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="income">Annual Income (AUD) *</label>
              <input
                type="number"
                id="income"
                name="income"
                required
                placeholder="e.g., 80000"
                value={formData.income}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button">
              Submit Pre-Application
            </button>
            <p className="form-note">
              * This is a credit check free pre-application. Ankush will contact you within 24 hours to discuss your options.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanApplicationForm; 