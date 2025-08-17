import React, { useState } from 'react';
import './LoanApplicationForm.css';
import { LoanFormData, LoanApplicationFormProps, LoanType, EmploymentStatus } from '../types';

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.loanType || !formData.loanAmount || !formData.employment || !formData.income) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new URLSearchParams();
      data.append('form-name', 'loan-application');
      data.append('firstName', formData.firstName);
      data.append('lastName', formData.lastName);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('loanType', formData.loanType);
      data.append('loanAmount', formData.loanAmount);
      data.append('purpose', formData.purpose);
      data.append('employment', formData.employment);
      data.append('income', formData.income);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString()
      });

      if (!response.ok) throw new Error('Submission failed');

      alert('Thank you for your application! We have received your loan application and will contact you within 24 hours.');
      onClose();
    } catch (error) {
      console.error('Error submitting loan application:', error);
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
              <label htmlFor="firstName">First Name <span className="required">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name <span className="required">*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number <span className="required">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="loanType">Loan Type <span className="required">*</span></label>
              <select
                id="loanType"
                name="loanType"
                required
                value={formData.loanType}
                onChange={handleInputChange}
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
              <label htmlFor="loanAmount">Loan Amount (AUD) <span className="required">*</span></label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                required
                placeholder="e.g., 500000"
                value={formData.loanAmount}
                onChange={handleInputChange}
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
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employment">Employment Status <span className="required">*</span></label>
              <select
                id="employment"
                name="employment"
                required
                value={formData.employment}
                onChange={handleInputChange}
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
              <label htmlFor="income">Annual Income (AUD) <span className="required">*</span></label>
              <input
                type="number"
                id="income"
                name="income"
                required
                placeholder="e.g., 80000"
                value={formData.income}
                onChange={handleInputChange}
                disabled={isSubmitting}
                min="20000"
                step="1000"
              />
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
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