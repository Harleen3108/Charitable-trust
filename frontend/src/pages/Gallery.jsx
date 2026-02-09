import { useState } from 'react'
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

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'education', name: 'Education' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'community', name: 'Community' },
    { id: 'women', name: 'Women' },
    { id: 'environment', name: 'Environment' }
  ]

  const images = [
    { src: img12, caption: 'Education Workshop', category: 'education' },
    { src: img7, caption: 'Classroom Session', category: 'education' },
    { src: img8, caption: 'Health Checkup', category: 'healthcare' },
    { src: img3, caption: 'Medical Camp', category: 'healthcare' },
    { src: img1, caption: 'Community Event', category: 'community' },
    { src: img2, caption: 'Children Program', category: 'community' },
    { src: img15, caption: 'Women Workshop', category: 'women' },
    { src: img9, caption: 'Skill Training', category: 'women' },
    { src: img6, caption: 'Tree Plantation', category: 'environment' },
    { src: img5, caption: 'Nature Conservation', category: 'environment' },
    { src: img11, caption: 'Relief Distribution', category: 'community' },
    { src: img10, caption: 'Team Activity', category: 'community' },
    { src: img4, caption: 'Awareness Program', category: 'education' },
    { src: img13, caption: 'Community Service', category: 'community' }
  ]

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="section-label">Our Moments</span>
            <h1 className="page-header-title">Gallery</h1>
            <p className="page-header-subtitle">
              Explore moments captured from our programs and events that showcase 
              our impact across communities.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'btn btn-primary' : 'btn btn-outline'}
                style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                className="gallery-item" 
                key={index}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.caption} />
                <div className="gallery-overlay">
                  <span className="gallery-caption">{image.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '2rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'var(--gold)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-dark)'
            }}
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div style={{ textAlign: 'center' }}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.caption}
              style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: 'var(--radius-lg)' }}
              onClick={(e) => e.stopPropagation()}
            />
            <p style={{ color: 'white', marginTop: '1rem', fontSize: '1.125rem' }}>
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Join Us</span>
            <h2 className="cta-title">Want to Be Part of These Moments?</h2>
            <p className="cta-text">
              Join us as a volunteer and create memories that matter while making 
              a real difference in people's lives.
            </p>
            <div className="cta-buttons">
              <Link to="/join" className="btn btn-primary btn-lg">Join as Volunteer</Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
