import React, { useState } from 'react';
import './DiscoveryCallForm.css';

interface ContactFormProps {
  onClose: () => void;
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  loanAmount: string;
  loanType: string; // optional
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    loanAmount: '',
    loanType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.loanAmount) {
      alert('Please fill in Full Name, Email, Mobile, and Loan Amount.');
      return;
    }

    setIsSubmitting(true);

    try {
      const emailBody = `New Contact Form Submission\n\n` +
        `Full Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Mobile: ${formData.phone}\n` +
        `Loan Amount: $${formData.loanAmount}\n` +
        `Loan Type (optional): ${formData.loanType || 'N/A'}\n\n` +
        `Please follow up with this customer.`;

      const mailtoLink = `mailto:ankush.ch@gmail.com?subject=${encodeURIComponent(
        `New Contact - ${formData.fullName}`
      )}&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;

      alert("Thanks! Your email client will open to send the details. If it doesn't, please email ankush.ch@gmail.com directly.");
      onClose();
    } catch (error) {
      console.error('Error preparing email:', error);
      alert('There was an error preparing your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="discovery-form-overlay" onClick={handleOverlayClick}>
      <div className="discovery-form-container">
        <div className="discovery-form-header">
          <h2>Contact Form</h2>
          <p>Share your details and we will get back to you shortly.</p>
          <button className="close-btn" onClick={onClose} aria-label="Close form">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="discovery-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name <span className="required">*</span></label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile <span className="required">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="e.g., 0400 000 000"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="loanAmount">Loan Amount (AUD) <span className="required">*</span></label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                required
                placeholder="e.g., 500000"
                min={"1000"}
                step={"1000"}
              />
            </div>
            <div className="form-group">
              <label htmlFor="loanType">Loan Type (Optional)</label>
              <select
                id="loanType"
                name="loanType"
                value={formData.loanType}
                onChange={handleInputChange}
              >
                <option value="">Select Loan Type (optional)</option>
                <option value="home-loan">Home Loan</option>
                <option value="refinancing">Refinancing</option>
                <option value="investment-property">Investment Property</option>
                <option value="personal-loan">Personal Loan</option>
                <option value="business-loan">Business Loan</option>
                <option value="commercial-loan">Commercial Loan</option>
                <option value="car-loan">Car Loan</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Send Details'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;


