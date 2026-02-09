import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'
import img4 from '../assets/4.jpeg'
import img5 from '../assets/5.jpeg'
import img6 from '../assets/6.jpeg'
import img7 from '../assets/7.jpeg'
import img8 from '../assets/8.jpeg'
import img9 from '../assets/9.jpeg'
import img10 from '../assets/10.jpeg'
import img11 from '../assets/11.jpeg'
import img12 from '../assets/12.jpeg'
import img13 from '../assets/13.jpeg'
import img15 from '../assets/15.jpeg'
import ownerPhoto from '../assets/photo.jpeg'
import ngoImage from '../assets/ngo.jpeg'
import certificateImg from '../assets/certificate.jpeg'

function Home() {

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
      icon: '🌳', 
      title: 'Tree Plantation: Go Green Initiative', 
      text: 'Planting trees to create a greener and healthier environment for future generations',
      image: img6
    },
    { 
      icon: '🩸', 
      title: 'Blood Donation: Gift of Life', 
      text: 'Organizing blood donation camps to save lives and support healthcare',
      image: img3
    }
  ]

  const services = [
    { 
      title: 'Education', 
      text: 'Quality learning opportunities for underprivileged children and youth.',
      image: img12
    },
    { 
      title: 'Healthcare', 
      text: 'Medical camps, health awareness, and maternal care initiatives.',
      image: img8
    },
    { 
      title: 'Women Empowerment', 
      text: 'Skill development and micro-enterprise support for women.',
      image: img15
    },
    { 
      title: 'Environment', 
      text: 'Tree plantation and sustainable agriculture initiatives.',
      image: img6
    },
    { 
      title: 'Community', 
      text: 'Infrastructure and livelihood improvement programs.',
      image: img10
    },
    { 
      title: 'Relief', 
      text: 'Rapid response for disaster-affected communities.',
      image: img11
    }
  ]

  const impactStats = [
    { number: 5000, suffix: '+', label: 'Lives Impacted' },
    { number: 100, suffix: '+', label: 'Volunteers' },
    { number: 50, suffix: '+', label: 'Projects Completed' },
    { number: 15, suffix: '+', label: 'Years of Service' }
  ]

  // Counter animation component
  const CountUp = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const countRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        },
        { threshold: 0.3 }
      )

      if (countRef.current) {
        observer.observe(countRef.current)
      }

      return () => observer.disconnect()
    }, [isVisible])

    useEffect(() => {
      if (!isVisible) return

      let startTime
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return <span ref={countRef}>{count}{suffix}</span>
  }

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
                <Link to="/contact" className="btn btn-primary btn-lg">Join Us</Link>
              </div>
              
              {/* Feature Cards */}
              <div className="hero-features">
                <div className="hero-feature-card">
                  <img src={img1} alt="Who we are" className="hero-feature-image" />
                </div>
                <div className="hero-feature-card gold">
                  <img src={img2} alt="Volunteer" className="hero-feature-image" />
                </div>
                <div className="hero-feature-card orange">
                  <img src={img3} alt="Stories" className="hero-feature-image" />
                </div>
                <div className="hero-feature-card purple">
                  <img src={img4} alt="Community" className="hero-feature-image" />
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

      {/* About / Helping Others Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src={img5} 
                alt="Helping others" 
              />
              <div className="about-quote">
                <p>
                  "The dedication of this trust towards child welfare and community service 
                  is truly heart touching. It is a blessing to be part of such noble work."
                </p>
                <div className="about-quote-author">
                  Rajesh Sharma
                  <span>Social Worker</span>
                </div>
              </div>
            </div>
            
            <div className="about-content">
              {/* <span className="section-label">Gift of $28</span> */}
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
          
          <div className="programs-grid">
            {services.map((service, index) => (
              <div className="program-card" key={index}>
                <div className="program-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="program-content">
                  <h3 className="program-title">{service.title}</h3>
                  <p className="program-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="section impact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Our Impact</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Making a Difference</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Numbers that reflect our commitment to creating positive change in communities.
            </p>
          </div>
          
          <div className="impact-grid">
            {impactStats.map((stat, index) => (
              <div className="impact-card" key={index}>
                <div className="impact-number">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="impact-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Recognition Section */}
      <section className="section founder-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Leadership</span>
            <h2 className="section-title">Meet Our Founder</h2>
            <p className="section-subtitle">
              Dedicated leadership driving positive change in communities across the region.
            </p>
          </div>
          
          <div className="founder-grid">
            {/* Founder Card */}
            <div className="founder-card">
              <div className="founder-image-wrapper">
                <img src={ownerPhoto} alt="Ramesh Balhara - Founder" className="founder-image" />
              </div>
              <div className="founder-info">
                <h3>Ramesh Balhara</h3>
                <span className="founder-title">Founder & Chairman</span>
                <p>Leading the mission to create lasting positive impact in education, healthcare, and community development.</p>
              </div>
            </div>

            {/* Certificate Card */}
            <div className="recognition-card">
              <div className="recognition-badge">✓ Registered NGO</div>
              <img src={certificateImg} alt="NGO Registration Certificate" className="certificate-image" />
              <p className="recognition-caption">Official Registration Certificate</p>
            </div>

            {/* NGO Image Card */}
            <div className="ngo-showcase-card">
              <img src={ngoImage} alt="Ramesh Balhara Charitable Trust" className="ngo-showcase-image" />
              <div className="ngo-overlay">
                <span>Ramesh Balhara Charitable Trust</span>
              </div>
            </div>
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
