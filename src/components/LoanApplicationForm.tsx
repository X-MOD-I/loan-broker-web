import React, { useState } from 'react';
import './LoanApplicationForm.css';
import { LoanFormData, LoanApplicationFormProps, FormInputChangeEvent, FormSubmitEvent, LoanType, EmploymentStatus } from '../types';

const LoanApplicationForm: React.FC<LoanApplicationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<LoanFormData>({
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

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: FormInputChangeEvent): void => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const requiredFields: (keyof LoanFormData)[] = [
      'firstName', 'lastName', 'email', 'phone', 'loanType', 'loanAmount', 'employment', 'income'
    ];
    
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const handleSubmit = async (e: FormSubmitEvent): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    try {
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
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = (): void => {
    onClose();
  };

  const loanTypeOptions = [
    { value: LoanType.HOME_LOAN, label: 'Home Loan' },
    { value: LoanType.REFINANCING, label: 'Refinancing' },
    { value: LoanType.INVESTMENT_PROPERTY, label: 'Investment Property' },
    { value: LoanType.PERSONAL_LOAN, label: 'Personal Loan' },
    { value: LoanType.BUSINESS_LOAN, label: 'Business Loan' },
    { value: LoanType.COMMERCIAL_LOAN, label: 'Commercial Loan' },
    { value: LoanType.CAR_LOAN, label: 'Car Loan' }
  ];

  const employmentOptions = [
    { value: EmploymentStatus.FULL_TIME, label: 'Full-time Employee' },
    { value: EmploymentStatus.PART_TIME, label: 'Part-time Employee' },
    { value: EmploymentStatus.SELF_EMPLOYED, label: 'Self-employed' },
    { value: EmploymentStatus.CONTRACTOR, label: 'Contractor' },
    { value: EmploymentStatus.BUSINESS_OWNER, label: 'Business Owner' },
    { value: EmploymentStatus.RETIRED, label: 'Retired' },
    { value: EmploymentStatus.OTHER, label: 'Other' }
  ];

  return (
    <div className="form-overlay">
      <div className="form-container">
        <div className="form-header">
          <h2>Loan Pre-Application Form</h2>
          <p>Credit Check Free - Get pre-approved in 24-48 hours</p>
          <button 
            className="close-button" 
            onClick={handleClose}
            type="button"
            aria-label="Close form"
          >
            &times;
          </button>
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              >
                <option value="">Select Loan Type</option>
                {loanTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
                disabled={isSubmitting}
                min="1000"
                step="1000"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="purpose">Purpose of Loan</label>
            <textarea
              id="purpose"
              name="purpose"
              rows={3}
              placeholder="Tell us how you plan to use this loan..."
              value={formData.purpose}
              onChange={handleChange}
              disabled={isSubmitting}
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
                disabled={isSubmitting}
              >
                <option value="">Select Employment Status</option>
                {employmentOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
                disabled={isSubmitting}
                min="20000"
                step="1000"
              />
            </div>
          </div>

          <div className="form-footer">
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting || !validateForm()}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Pre-Application'}
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