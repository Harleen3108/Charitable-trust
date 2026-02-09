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

function Services() {
  const services = [
    {
      // icon: '📚',
      title: 'Education Programs',
      description: 'Education is the foundation of lasting change. Our education programs provide quality learning opportunities to children and youth from underprivileged backgrounds.',
      features: ['Scholarship Programs', 'After-School Tutoring', 'Digital Literacy', 'School Supplies Distribution'],
      image: img12
    },
    {
      // icon: '🏥',
      title: 'Healthcare Initiatives',
      description: 'Access to healthcare is a fundamental right. We organize medical camps, provide health education, and facilitate access to essential medical services.',
      features: ['Free Medical Camps', 'Health Awareness Programs', 'Maternal & Child Health', 'Medicine Distribution'],
      image: img8
    },
    {
      // icon: '👩‍👧',
      title: 'Women Empowerment',
      description: 'Empowering women means empowering entire communities. Our programs focus on skill development, financial literacy, and creating opportunities for economic independence.',
      features: ['Skill Development', 'Self-Help Groups', 'Micro-Enterprise Support', 'Financial Literacy'],
      image: img15
    },
    {
      // icon: '🌳',
      title: 'Environmental Conservation',
      description: 'Protecting our environment is protecting our future. We engage communities in tree plantation drives, waste management, and sustainable farming practices.',
      features: ['Tree Plantation Drives', 'Waste Management', 'Clean Water Initiatives', 'Sustainable Agriculture'],
      image: img6
    },
    {
      // icon: '🏘️',
      title: 'Community Development',
      description: 'Holistic community development addresses multiple aspects of wellbeing. We work with communities to improve infrastructure, livelihoods, and quality of life.',
      features: ['Infrastructure Development', 'Livelihood Programs', 'Youth Skill Training', 'Rural Development'],
      image: img10
    },
    {
      // icon: '🆘',
      title: 'Emergency Relief',
      description: 'When disaster strikes, we respond swiftly to provide essential relief to affected communities, including food, shelter, medical aid, and rehabilitation support.',
      features: ['Disaster Response', 'Food & Shelter', 'Medical Aid', 'Rehabilitation Support'],
      image: img11
    }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="section-label">What We Do</span>
            <h1 className="page-header-title">Our Services</h1>
            <p className="page-header-subtitle">
              Comprehensive programs designed to create lasting impact in education, 
              healthcare, and community development.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Impact</span>
            <h2 className="section-title">Programs That Transform Lives</h2>
            <p className="section-subtitle">
              We offer a range of integrated programs that address the core needs of 
              underprivileged communities, creating sustainable pathways to progress.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, index) => (
        <section key={index} className={`section ${index % 2 === 0 ? 'section-alt' : ''}`}>
          <div className="container">
            <div className="about-grid" style={{ direction: index % 2 === 1 ? 'rtl' : 'ltr' }}>
              <div className="about-image" style={{ direction: 'ltr' }}>
                <img src={service.image} alt={service.title} style={{ borderRadius: 'var(--radius-xl)' }} />
              </div>
              <div className="about-content" style={{ direction: 'ltr' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'var(--cream)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  {service.icon}
                </div>
                <span className="section-label">{service.title.split(' ')[0]}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                
                <div className="about-features" style={{ marginTop: '1.5rem' }}>
                  {service.features.map((feature, i) => (
                    <div className="about-feature" key={i}>
                      <div className="about-feature-icon">✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Get Involved</span>
            <h2 className="cta-title">Support Our Programs</h2>
            <p className="cta-text">
              Every contribution helps us extend our reach and deepen our impact. 
              Join us in making a difference today.
            </p>
            <div className="cta-buttons">
              <Link to="/join" className="btn btn-primary btn-lg">Volunteer With Us</Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
