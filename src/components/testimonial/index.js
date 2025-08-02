import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

const TestimonialsWrapper = styled.section`
  padding: 6rem 0;
  background-color: #f9fafb;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #111827;
  margin-bottom: 1rem;
`;

// Desktop Grid View
const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Mobile Carousel View
const MobileCarousel = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${({ $currentIndex }) => -$currentIndex * 100}%);
`;

// Shared Card Styles
const TestimonialCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  flex: 0 0 100%;
  margin: 0 1rem;
  box-sizing: border-box;

  @media (min-width: 769px) {
    margin: 0;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '"';
    position: absolute;
    left: 0;
    top: -0.5rem;
    font-size: 3rem;
    color: rgba(79, 172, 254, 0.2);
    font-family: serif;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Star = styled.span`
  color: ${({ $filled }) => ($filled ? '#FFD700' : '#E5E7EB')};
  font-size: 1.2rem;
  margin-right: 0.2rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  border: 3px solid white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  background-color: #f3f4f6; // Fallback if image fails to load

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorDetails = styled.div``;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: #111827;
`;

const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  margin: 0 5px;
  padding: 0;
  background: ${({ $active }) => ($active ? '#4b5563' : '#e5e7eb')};
  cursor: pointer;
  transition: all 0.3s ease;
`;

const testimonials = [
  {
    id: 1,
    quote: "I loved the way teacher taught us very nicely, the knowledge which I got from here can be implemented in real world",
    name: "Bibek Kshetri",
    role: "Web Development Course",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4
  },
  {
    id: 2,
    quote: "I am fascinate with the teaching method of this center. I have learn a lot about basic computer courses which will be very beneficial for my future study.",
    name: "Hemant Oli",
    role: "Basic Computer Skills Training",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "Best decision I made for my personal development. The hands-on projects gave me the confidence to use computer smoothly.",
    name: "Kabita Dhungena",
    role: "Basic computer skills Training",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 4
  },
  {
    id: 4,
    quote: "The quality of education exceeded my expectations. I went from beginner to job-ready in just 1.5 months.",
    name: "Sanjay Thapa",
    role: "Computer Repairing course",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5
  },
   {
    id: 5,
    quote: "Fees are affordable, all the computers and equipment are in good conditions. Best place in city to get knowledge about Computers.",
    name: "Laxman Shrestha",
    role: "Computer Repairing course",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4
  }
];

const StarRating = ({ rating }) => {
  return (
    <StarsContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} $filled={star <= rating}>
          {star <= rating ? '★' : '☆'}
        </Star>
      ))}
    </StarsContainer>
  );
};

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStart = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle swipe for mobile
  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  // Auto-rotate for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile, currentIndex]);

  return (
    <TestimonialsWrapper id="testimonials">
      <Container>
        <SectionHeader>
          <SectionTitle>Student Success Stories</SectionTitle>
        </SectionHeader>

        {/* Desktop Grid */}
        <TestimonialsGrid>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <StarRating rating={testimonial.rating} />
              <TestimonialText>{testimonial.quote}</TestimonialText>
              <AuthorInfo>
                <AuthorImage>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                </AuthorImage>
                <AuthorDetails>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                </AuthorDetails>
              </AuthorInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>

        {/* Mobile Carousel */}
        <MobileCarousel>
          <CarouselTrack 
            $currentIndex={currentIndex}
            onTouchStart={(e) => touchStart.current = e.touches[0].clientX}
            onTouchMove={(e) => {
              if (!touchStart.current) return;
              const diff = touchStart.current - e.touches[0].clientX;
              if (Math.abs(diff) > 50) {
                handleSwipe(diff > 0 ? 'left' : 'right');
                touchStart.current = null;
              }
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <StarRating rating={testimonial.rating} />
                <TestimonialText>{testimonial.quote}</TestimonialText>
                <AuthorInfo>
                  <AuthorImage>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                      }}
                    />
                  </AuthorImage>
                  <AuthorDetails>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </AuthorDetails>
                </AuthorInfo>
              </TestimonialCard>
            ))}
          </CarouselTrack>

          <DotsContainer>
            {testimonials.map((_, index) => (
              <Dot 
                key={index} 
                $active={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </DotsContainer>
        </MobileCarousel>
      </Container>
    </TestimonialsWrapper>
  );
};