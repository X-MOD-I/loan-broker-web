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
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formData.name || !formData.phone || !formData.email) {
      setSubmitError('Please fill in all required fields (Full Name, Phone Number, and Email Address).');
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

      // Auto close after 4 seconds for discovery call
      setTimeout(() => {
        onClose();
      }, 4000);
    } catch (error) {
      console.error('Error submitting discovery call form:', error);
      setSubmitError('There was an error booking your discovery call. Please try again or contact us directly.');
    } finally {
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
          <div className="success-message">
            <div className="success-icon">🎉</div>
            <h3>Discovery Call Booked Successfully!</h3>
            <p>Thank you for booking your free 30-minute discovery call! Ankush will contact you within 24 hours to confirm your appointment.</p>
            <div className="success-details">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Preferred Time:</strong> {formData.preferredTime}</p>
              {formData.subject && <p><strong>Topic:</strong> {formData.subject}</p>}
            </div>
            <div className="next-steps">
              <h4>What happens next:</h4>
              <ul>
                <li>✅ You'll receive a confirmation email shortly</li>
                <li>📞 Ankush will call you to schedule the exact time</li>
                <li>💼 Prepare any questions about your financial goals</li>
              </ul>
            </div>
            <p className="auto-close-note">This window will close automatically in a few seconds...</p>
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
          {submitError && (
            <div className="error-message">
              <div className="error-icon">⚠️</div>
              <p>{submitError}</p>
            </div>
          )}
          
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
              disabled={isSubmitting}
              placeholder="e.g., First home loan, refinancing, investment property..."
              rows={3}
            />
          </div>

          <div className="form-footer">
            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  <span>Booking...</span>
                </>
              ) : (
                'Book Free Discovery Call'
              )}
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