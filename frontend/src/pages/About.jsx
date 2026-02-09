import { Link } from 'react-router-dom'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'
import img4 from '../assets/4.jpeg'
import img5 from '../assets/5.jpeg'
import ownerPhoto from '../assets/photo.jpeg'
import ngoImage from '../assets/ngo.jpeg'

function About() {
  const values = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ), 
      title: 'Compassion', 
      text: 'We approach every individual with empathy and understanding.' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ), 
      title: 'Integrity', 
      text: 'Transparency and honesty guide all our actions and decisions.' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      ), 
      title: 'Sustainability', 
      text: 'We create lasting solutions that empower communities.' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ), 
      title: 'Excellence', 
      text: 'We strive for the highest standards in everything we do.' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ), 
      title: 'Inclusion', 
      text: 'We believe in equal opportunities for all, regardless of background.' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      ), 
      title: 'Empowerment', 
      text: 'We enable people to become agents of their own change.' 
    }
  ]

  const stats = [
    { number: '5,000+', label: 'Lives Impacted' },
    { number: '50+', label: 'Villages Reached' },
    { number: '100+', label: 'Volunteers' },
    { number: '15+', label: 'Years of Service' }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="section-label">Who We Are</span>
            <h1 className="page-header-title">About Us</h1>
            <p className="page-header-subtitle">
              Learn about our journey, mission, and the values that drive our work 
              in creating sustainable change.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-grid" style={{ direction: 'rtl' }}>
            <div className="about-image" style={{ direction: 'ltr' }}>
              <img src={ownerPhoto} alt="Founder" style={{ objectFit: 'cover' }} />
            </div>
            <div className="about-content" style={{ direction: 'ltr' }}>
              <span className="section-label">Our Founder</span>
              <h2>Shri Ramesh Balhara</h2>
              <p>
                With a deep commitment to social welfare and community development, 
                Shri Ramesh Balhara established this trust to create meaningful change 
                in the lives of underprivileged communities.
              </p>
              <p>
                His vision of empowering through education and healthcare continues 
                to guide our work, inspiring volunteers and team members to make 
                a lasting difference every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={img1} alt="Our story" />
            </div>
            
            <div className="about-content">
              <span className="section-label">Our Story</span>
              <h2>Building Hope<br/>Since 2010</h2>
              <p>
                Ramesh Balhara Charitable Trust was founded with a vision to uplift 
                underprivileged communities through education, healthcare, and sustainable 
                development. What started as a small initiative has grown into a 
                comprehensive organization serving thousands.
              </p>
              <p>
                Today, we operate across multiple villages in Haryana, touching the lives of 
                thousands through our integrated programs in education, healthcare, 
                women empowerment, and environmental conservation.
              </p>
              
              {/* Progress Bars */}
              <div className="progress-bars">
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Mission Achieved</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Community Impact</span>
                    <span>92%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <div className="card-icon" style={{ background: 'var(--green-dark)', color: 'var(--white)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To empower underprivileged communities through sustainable development 
                programs that address the root causes of poverty and inequality, creating 
                pathways to self-reliance and dignity.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon" style={{ background: 'var(--gold)', color: 'var(--text-dark)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                A world where every individual has access to quality education, 
                healthcare, and equal opportunities to realize their full potential, 
                regardless of their socio-economic background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide every decision we make and every action we take.
            </p>
          </div>
          
          <div className="services-grid">
            {values.map((value, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon" style={{ background: 'var(--green-dark)', color: 'var(--gold)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  {value.icon}
                </div>
                <h3 className="service-title">{value.title}</h3>
                <p className="service-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="impact-section section">
        <div className="container">
          <div className="section-header" style={{ color: 'var(--white)' }}>
            <span className="section-label" style={{ color: 'var(--gold)' }}>Our Reach</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Our Impact</h2>
          </div>
          
          <div className="impact-grid">
            {stats.map((stat, index) => (
              <div className="impact-card" key={index}>
                <div className="impact-number">{stat.number}</div>
                <p className="impact-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Glimpses of Our Journey</h2>
          </div>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <img src={img2} alt="Our work" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            <img src={img3} alt="Our work" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            <img src={img4} alt="Our work" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/gallery" className="btn btn-primary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Join Us</span>
            <h2 className="cta-title">Become Part of Our Story</h2>
            <p className="cta-text">
              Join us in our mission to create lasting change. Together, we can 
              build a better future for those who need it most.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Join Us</Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

