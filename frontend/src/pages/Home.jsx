import { Link } from 'react-router-dom'

function Home() {
  const partners = ['ART Academy', 'WORLD Blood Donor', 'GreenCore', 'Findr']
  
  const solutions = [
    { 
      icon: '🛡️', 
      title: 'Fight Poverty Programs & Service Children', 
      text: 'Provides nutritious food, healthcare and vocational training',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80'
    },
    { 
      icon: '📚', 
      title: 'Bright Futures: Education for Every Child', 
      text: 'Provides quality education, books, and learning materials',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&q=80'
    },
    { 
      icon: '🍎', 
      title: 'Nourish Hope: Feeding Children in Crisis', 
      text: 'Provides nutritious food, healthcare and vocational training',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80'
    },
    { 
      icon: '🏠', 
      title: 'Safe and Sound: Shelter for Every Child', 
      text: 'Provides safe shelter, food, and educational training',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80'
    }
  ]

  const services = [
    { icon: '📚', title: 'Education', text: 'Quality learning opportunities for underprivileged children and youth.' },
    { icon: '🏥', title: 'Healthcare', text: 'Medical camps, health awareness, and maternal care initiatives.' },
    { icon: '👩‍👧', title: 'Women Empowerment', text: 'Skill development and micro-enterprise support for women.' },
    { icon: '🌳', title: 'Environment', text: 'Tree plantation and sustainable agriculture initiatives.' },
    { icon: '🏘️', title: 'Community', text: 'Infrastructure and livelihood improvement programs.' },
    { icon: '🆘', title: 'Relief', text: 'Rapid response for disaster-affected communities.' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content animate-fade-in">
              <div className="hero-label">
                <span>NON-PROFIT CHARITY</span>
              </div>
              
              <h1 className="hero-title">
                Give <span className="highlight">Hope</span> To Children In Need.
              </h1>
              
              <div className="hero-buttons">
                <Link to="/join" className="btn btn-primary btn-lg">Donate Now</Link>
                <button className="btn btn-outline btn-lg">
                  ▶ Video Playing Theme
                </button>
              </div>
              
              {/* Feature Cards */}
              <div className="hero-features">
                <div className="hero-feature-card">
                  <div className="hero-feature-icon">🏛️</div>
                  <div className="hero-feature-content">
                    <h4>WHO WE ARE</h4>
                    <p>Companies House</p>
                  </div>
                </div>
                <div className="hero-feature-card gold">
                  <div className="hero-feature-icon">🌟</div>
                  <div className="hero-feature-content">
                    <h4>VOLUNTEER</h4>
                    <p>Take Action</p>
                  </div>
                </div>
                <div className="hero-feature-card orange">
                  <div className="hero-feature-icon">🌍</div>
                  <div className="hero-feature-content">
                    <h4>STORIES</h4>
                    <p>Building A Future In Africa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" 
                alt="Happy children" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <p className="partners-label">Non-Profit Charity</p>
          <div className="partners-logos">
            {partners.map((partner, index) => (
              <span key={index} className="partner-logo">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About / Helping Others Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80" 
                alt="Helping others" 
              />
              <div className="about-quote">
                <p>
                  "This place is awesome and huge! Michael was super cool and very 
                  pleasant. If you want someone to deliver the goods on your project."
                </p>
                <div className="about-quote-author">
                  Hayes Merry
                  <span>Designer</span>
                </div>
              </div>
            </div>
            
            <div className="about-content">
              <span className="section-label">Gift of $28</span>
              <h2>Helping Others<br/>Improves World</h2>
              <p>
                Ensures that kids living in poverty have access to life-changing benefits 
                like medical care, educational support, life skills and job training before 
                they graduate.
              </p>
              
              {/* Progress Bars */}
              <div className="progress-bars">
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Save Water</span>
                    <span>59%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '59%' }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Education</span>
                    <span>98%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn btn-outline">About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivering Solutions Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Help</span>
            <h2 className="section-title">Delivering Solutions</h2>
            <p className="section-subtitle">
              We are a dedicated charity organization focused on creating sustainable 
              impact in communities. From education to healthcare, we aim to empower 
              those in need with the tools to build a better future.
            </p>
          </div>
          
          <div className="solutions-grid">
            {solutions.map((item, index) => (
              <div className="solution-card" key={index}>
                <div className="solution-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="solution-content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline">Explore More</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">
              Comprehensive programs designed to create lasting impact across 
              education, healthcare, and community development.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Ready to Help?</span>
            <h2 className="cta-title">Ready to Make a Difference?</h2>
            <p className="cta-text">
              Join thousands of volunteers and supporters who are transforming lives 
              every day. Together, we can create lasting change.
            </p>
            <div className="cta-buttons">
              <Link to="/join" className="btn btn-primary btn-lg">Become a Volunteer</Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
