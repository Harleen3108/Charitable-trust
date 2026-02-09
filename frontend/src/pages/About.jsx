import { Link } from 'react-router-dom'

function About() {
  const values = [
    { icon: '❤️', title: 'Compassion', text: 'We approach every individual with empathy and understanding.' },
    { icon: '🤝', title: 'Integrity', text: 'Transparency and honesty guide all our actions and decisions.' },
    { icon: '🌱', title: 'Sustainability', text: 'We create lasting solutions that empower communities.' },
    { icon: '🎯', title: 'Excellence', text: 'We strive for the highest standards in everything we do.' },
    { icon: '👥', title: 'Inclusion', text: 'We believe in equal opportunities for all, regardless of background.' },
    { icon: '💪', title: 'Empowerment', text: 'We enable people to become agents of their own change.' }
  ]

  const stats = [
    { number: '50,000+', label: 'Lives Impacted' },
    { number: '100+', label: 'Villages Reached' },
    { number: '2,500+', label: 'Scholarships' },
    { number: '500+', label: 'Volunteers' }
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

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80" alt="Our story" />
            </div>
            
            <div className="about-content">
              <span className="section-label">Our Story</span>
              <h2>Building Hope<br/>Since 2010</h2>
              <p>
                KidHope was founded by a group of passionate individuals who believed 
                in the power of community-driven change. What started as a small 
                initiative to support education in rural areas has grown into a 
                comprehensive organization.
              </p>
              <p>
                Today, we operate across multiple districts, touching the lives of 
                thousands through our integrated programs in education, healthcare, 
                women empowerment, and sustainable development.
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
      <section className="section section-alt">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To empower underprivileged communities through sustainable development 
                programs that address the root causes of poverty and inequality, creating 
                pathways to self-reliance and dignity.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">🔭</div>
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
      <section className="section">
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
                <div className="service-icon">{value.icon}</div>
                <h3 className="service-title">{value.title}</h3>
                <p className="service-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Reach</span>
            <h2 className="section-title">Our Impact</h2>
          </div>
          
          <div className="grid-4">
            {stats.map((stat, index) => (
              <div className="card text-center" key={index}>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--gold)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                  {stat.number}
                </div>
                <p className="card-text">{stat.label}</p>
              </div>
            ))}
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
              <Link to="/join" className="btn btn-primary btn-lg">Join as Volunteer</Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
