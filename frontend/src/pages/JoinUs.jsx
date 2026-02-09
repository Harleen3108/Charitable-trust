import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    interests: [],
    availability: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const interestOptions = [
    { value: 'education', label: 'Education' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'women-empowerment', label: 'Women Empowerment' },
    { value: 'environment', label: 'Environment' },
    { value: 'outreach', label: 'Community Outreach' },
    { value: 'admin', label: 'Administrative Support' }
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleInterestChange = (value) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(i => i !== value)
        : [...prev.interests, value]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post(`${API_URL}/members`, {
        ...formData,
        age: formData.age ? parseInt(formData.age) : undefined
      })
      setStatus({ type: 'success', message: response.data.message })
      setFormData({
        name: '', email: '', phone: '', age: '', address: '',
        interests: [], availability: '', message: ''
      })
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Something went wrong. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const opportunities = [
    { icon: '📚', title: 'Teaching & Tutoring', text: 'Help children with their education through tutoring.' },
    { icon: '🏥', title: 'Healthcare Support', text: 'Assist in organizing medical camps and programs.' },
    { icon: '📣', title: 'Community Outreach', text: 'Spread awareness and engage with communities.' },
    { icon: '💻', title: 'Technical Support', text: 'Help with digital literacy and IT infrastructure.' }
  ]

  const testimonials = [
    { name: 'Priya Sharma', role: 'Volunteer since 2019', text: 'Volunteering with KidHope has been life-changing. The smiles make every effort worthwhile.' },
    { name: 'Rahul Verma', role: 'Volunteer since 2021', text: 'The team is supportive and the work has real, tangible impact on communities.' },
    { name: 'Anita Singh', role: 'Volunteer since 2020', text: "I've grown so much through my work here. It's more than volunteering; it's a family." }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="section-label">Get Involved</span>
            <h1 className="page-header-title">Join Us</h1>
            <p className="page-header-subtitle">
              Become a part of our mission to create lasting change in communities.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Join Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Ways to Help</span>
            <h2 className="section-title">Volunteer Opportunities</h2>
            <p className="section-subtitle">
              Find the perfect way to contribute your skills and make a difference.
            </p>
          </div>

          <div className="grid-4">
            {opportunities.map((opp, index) => (
              <div className="card" key={index}>
                <div className="card-icon">{opp.icon}</div>
                <h4 className="card-title">{opp.title}</h4>
                <p className="card-text">{opp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Apply Now</span>
            <h2 className="section-title">Volunteer Application</h2>
            <p className="section-subtitle">
              Fill out the form below and our team will get in touch with you.
            </p>
          </div>

          <div className="contact-form-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your full name"
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
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="Your age"
                    min="18"
                    max="100"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Your address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Areas of Interest</label>
                <div className="checkbox-group">
                  {interestOptions.map(option => (
                    <label key={option.value} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(option.value)}
                        onChange={() => handleInterestChange(option.value)}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Availability</label>
                <select
                  name="availability"
                  className="form-control"
                  value={formData.availability}
                  onChange={handleChange}
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Why do you want to volunteer?</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Tell us about yourself..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>

              {status.message && (
                <div className={`form-message ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Stories</span>
            <h2 className="section-title">What Our Volunteers Say</h2>
          </div>

          <div className="grid-3">
            {testimonials.map((t, index) => (
              <div className="card" key={index}>
                <p className="card-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{t.text}"
                </p>
                <div>
                  <strong>{t.name}</strong>
                  <p style={{ color: 'var(--gold)', fontSize: '0.875rem' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Other Ways</span>
            <h2 className="cta-title">Other Ways to Help</h2>
            <p className="cta-text">
              Can't volunteer? You can still support through donations, 
              partnerships, or spreading the word about our work.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JoinUs
