import React, { useState } from 'react';
import styled from 'styled-components';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import all images from assets folder
import image1 from 'assets/WhatsApp Image 2025-08-02 at 9.29.57 PM.jpeg';
import image2 from 'assets/WhatsApp Image 2025-08-02 at 9.30.00 PM.jpeg';
import image3 from 'assets/WhatsApp Image 2025-08-02 at 9.30.03 PM.jpeg';
import image4 from 'assets/WhatsApp Image 2025-08-02 at 9.30.05 PM.jpeg';
import image5 from 'assets/WhatsApp Image 2025-08-02 at 9.31.06 PM.jpeg';
import image6 from 'assets/WhatsApp Image 2025-08-02 at 9.31.06 PM(1).jpeg';
import image7 from 'assets/WhatsApp Image 2025-08-02 at 9.32.57 PM.jpeg';

// Gallery images with descriptive alt text and categories
const galleryImages = [
  { id: 1, src: image1, alt: 'Students Receving completion certificate', category: 'classroom' },
  { id: 2, src: image2, alt: 'Computer Insttitute location', category: 'lab' },
  { id: 3, src: image3, alt: 'Students Receving completion certificate', category: 'classroom', featured: true },
  { id: 4, src: image4, alt: 'Instructor demonstrating coding techniques', category: 'classroom' },
  { id: 5, src: image5, alt: 'Students engaged in hands-on exercise', category: 'lab' },
  { id: 6, src: image6, alt: 'Annual technology conference at institute', category: 'events' },
  { id: 7, src: image7, alt: 'Registration Certificate', category: 'events', featured: true },
];

const GalleryPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction) => {
    const filteredImages = getFilteredImages();
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % filteredImages.length;
    }
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === filteredImages[newIndex].id));
  };

  const getFilteredImages = () => {
    return activeCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === activeCategory);
  };

  const filteredImages = getFilteredImages();

  return (
    <GalleryContainer>
      <Header>
        <h1>Institute Gallery</h1>
        <p>Explore our learning environment and activities</p>
      </Header>

      <CategoryFilters>
        <CategoryButton 
          active={activeCategory === 'all'} 
          onClick={() => setActiveCategory('all')}
        >
          All
        </CategoryButton>
        <CategoryButton 
          active={activeCategory === 'classroom'} 
          onClick={() => setActiveCategory('classroom')}
        >
          Classroom
        </CategoryButton>
        <CategoryButton 
          active={activeCategory === 'lab'} 
          onClick={() => setActiveCategory('lab')}
        >
          Labs
        </CategoryButton>
        <CategoryButton 
          active={activeCategory === 'events'} 
          onClick={() => setActiveCategory('events')}
        >
          Events
        </CategoryButton>
      </CategoryFilters>

      <MasonryGrid>
        {filteredImages.map((image, index) => (
          <GalleryItem 
            key={image.id}
            featured={image.featured}
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              loading="lazy"
            />
            <ZoomIcon>
              <FiZoomIn size={24} />
            </ZoomIcon>
            <Caption>{image.alt}</Caption>
          </GalleryItem>
        ))}
      </MasonryGrid>

      {lightboxOpen && (
        <Lightbox>
          <LightboxContent>
            <CloseBtn onClick={closeLightbox}>
              <FiX size={28} />
            </CloseBtn>
            
            <NavButtonLeft onClick={() => navigate('prev')}>
              <FiChevronLeft size={32} />
            </NavButtonLeft>
            
            <LightboxImage 
              src={filteredImages[currentImageIndex].src} 
              alt={filteredImages[currentImageIndex].alt} 
            />
            
            <NavButtonRight onClick={() => navigate('next')}>
              <FiChevronRight size={32} />
            </NavButtonRight>
            
            <LightboxCaption>
              {filteredImages[currentImageIndex].alt}
            </LightboxCaption>
          </LightboxContent>
        </Lightbox>
      )}
    </GalleryContainer>
  );
};

// Styled Components
const GalleryContainer = styled.div`
  max-width: 1400px;
  margin: 70px auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #4361ee, #3a0ca3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #666;
    font-size: 1.2rem;
  }
`;

const CategoryFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 30px;
  background: ${props => props.active ? '#4361ee' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.active ? '600' : '400'};

  &:hover {
    background: ${props => props.active ? '#3a56d4' : '#e0e0e0'};
  }
`;

const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 10px;
  gap: 1.5rem;
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  grid-row-end: span ${props => props.featured ? 30 : 20};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

    img {
      transform: scale(1.05);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
`;

const ZoomIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: #333;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 1rem 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  transform: translateY(10px);

  ${GalleryItem}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    to { opacity: 1; }
  }
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const LightboxCaption = styled.div`
  color: white;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const NavButtonLeft = styled(NavButton)`
  left: 2rem;
`;

const NavButtonRight = styled(NavButton)`
  right: 2rem;
`;

export default GalleryPage;