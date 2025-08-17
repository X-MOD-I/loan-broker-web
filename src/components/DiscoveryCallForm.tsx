import React, { useState } from 'react';
import './DiscoveryCallForm.css';

interface DiscoveryCallFormProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  preferredTime: string;
  subject: string;
}

const DiscoveryCallForm: React.FC<DiscoveryCallFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    preferredTime: '9am - 12pm',
    subject: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in Full Name, Phone Number, and Email Address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new URLSearchParams();
      data.append('form-name', 'discovery-call');
      data.append('bot-field', '');
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      data.append('email', formData.email);
      data.append('preferredTime', formData.preferredTime);
      data.append('subject', formData.subject);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString()
      });

      if (!response.ok) throw new Error('Submission failed');

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting discovery call form:', error);
      alert('There was an error booking your discovery call. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (isSubmitted) {
    return (
      <div className="discovery-form-overlay" onClick={handleOverlayClick}>
        <div className="discovery-form-container success">
          <div className="success-content">
            <div className="success-icon">✅</div>
            <h2>Discovery Call Booked!</h2>
            <p>Thank you for booking your free 30-minute discovery call. We'll contact you within 24 hours to confirm your appointment.</p>
            <div className="success-details">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Preferred Time:</strong> {formData.preferredTime}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="discovery-form-overlay" onClick={handleOverlayClick}>
      <div className="discovery-form-container">
        <div className="discovery-form-header">
          <h2>Book Your FREE 30-Minute Discovery Call</h2>
          <p>Schedule a no-obligation consultation with Melbourne's premier mortgage broker</p>
          <button className="close-btn" onClick={onClose} aria-label="Close form">×</button>
        </div>

        <form onSubmit={handleSubmit} className="discovery-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number <span className="required">*</span></label>
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

          <div className="form-row">
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
            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time to Call</label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
              >
                <option value="9am - 12pm">9am - 12pm</option>
                <option value="12pm - 3pm">12pm - 3pm</option>
                <option value="3pm - 6pm">3pm - 6pm</option>
                <option value="6pm - 9pm">6pm - 9pm</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">What would you like to discuss? (Optional)</label>
            <textarea
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="e.g., First home loan, refinancing, investment property..."
              rows={3}
            />
          </div>

          <div className="form-footer">
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Booking...' : 'Book Free Discovery Call'}
            </button>
          </div>
        </form>

        <div className="discovery-form-benefits">
          <h4>What to expect in your discovery call:</h4>
          <ul>
            <li>✅ Assessment of your financial goals</li>
            <li>✅ Review of loan options tailored to you</li>
            <li>✅ Discussion of current market rates</li>
            <li>✅ No obligation consultation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCallForm;