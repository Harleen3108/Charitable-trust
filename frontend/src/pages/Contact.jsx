import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post(`${API_URL}/contact`, formData)
      setStatus({ type: 'success', message: response.data.message })
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Something went wrong. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqs = [
    { q: 'How can I volunteer with KidHope?', a: 'Visit our Join Us page to fill out the volunteer application form. Our team will contact you within 48 hours.' },
    { q: 'Are donations tax-deductible?', a: 'Yes, all donations to KidHope are eligible for tax exemption under Section 80G of the Income Tax Act.' },
    { q: 'Where do you operate?', a: 'We currently operate across multiple districts. Contact us to learn about activities in your area.' },
    { q: 'How can organizations partner with you?', a: 'We welcome partnerships! Please reach out via email or phone to discuss collaboration opportunities.' }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="section-label">Get In Touch</span>
            <h1 className="page-header-title">Contact Us</h1>
            <p className="page-header-subtitle">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>We're here to help and answer any questions you might have.</p>

              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-content">
                  <h4>Address</h4>
                  <p>123 Community Center Road<br />City Name, State 123456</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div className="contact-item-content">
                  <h4>Email</h4>
                  <p>info@kidhope.org<br />support@kidhope.org</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div className="contact-item-content">
                  <h4>Phone</h4>
                  <p>+91 98765 43210<br />+91 12345 67890</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">🕐</div>
                <div className="contact-item-content">
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h3 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Send us a Message</h3>
              <p style={{ color: 'var(--text-medium)', marginBottom: '1.5rem' }}>Fill out the form and we'll get back to you soon.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {status.message && (
                  <div className={`form-message ${status.type}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Location</span>
            <h2 className="section-title">Find Us</h2>
          </div>
          
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1639732938471!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Help Center</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="card" style={{ marginBottom: '1rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--green-dark)', fontFamily: 'var(--font-heading)' }}>{faq.q}</h4>
                <p className="card-text">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
