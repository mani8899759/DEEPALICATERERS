import React, { useState } from 'react';
import { X, CheckCircle, Phone, Calendar, Users, Send } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: 'Wedding',
    date: '',
    guestCount: '250',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // reset after 4s
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-background border-2 border-primary w-full max-w-xl p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-primary hover:bg-primary hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">
              Consultation Request Received
            </h3>
            <p className="font-sans text-sm text-on-surface-variant max-w-md mx-auto mb-6">
              Thank you, <span className="font-bold text-primary">{formData.name || 'Valued Guest'}</span>. Our Executive Culinary Director in Hyderabad will contact you at <span className="font-bold text-primary">{formData.phone}</span> within 2 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest px-8 py-3"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <span className="font-sans text-xs uppercase tracking-editorial font-bold text-secondary mb-1 block">
              Private Culinary Consultation
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4 border-b border-primary/20 pb-3">
              Book a Tasting & Event Discussion
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-primary mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface-container-low border border-primary p-3 text-sm focus:outline-none focus:border-secondary text-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-primary mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98490 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-surface-container-low border border-primary p-3 text-sm focus:outline-none focus:border-secondary text-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-primary mb-1">
                    Occasion Type
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-surface-container-low border border-primary p-3 text-sm focus:outline-none focus:border-secondary text-primary"
                  >
                    <option value="Wedding">Grand Wedding & Reception</option>
                    <option value="Corporate">Corporate Gala & Summit</option>
                    <option value="Sangeet">Sangeet & Mehendi Night</option>
                    <option value="Private Dining">Royal Private Dining</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-primary mb-1">
                    Approximate Guests
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 350"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full bg-surface-container-low border border-primary p-3 text-sm focus:outline-none focus:border-secondary text-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-primary mb-1">
                  Event Date & Specific Requirements
                </label>
                <textarea
                  rows="3"
                  placeholder="Mention preferred event dates, venue location in Hyderabad, or dietary requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-surface-container-low border border-primary p-3 text-sm focus:outline-none focus:border-secondary text-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-background font-sans text-xs uppercase font-bold tracking-widest py-4 hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-brand-gold" />
                Submit Consultation Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
