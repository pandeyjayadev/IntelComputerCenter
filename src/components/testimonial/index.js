import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

// Import your local images
import BibekImage from '../assets/bibek.jpeg';
import HemantImage from '../assets/Hemu.jpeg';
import KabitaImage from '../assets/kabita.jpeg';
import SanjayImage from '../assets/sanjay.jpeg';
import LaxmanImage from '../assets/laxman.jpeg';

const TestimonialsWrapper = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f9fafb 0%, #f0f4f8 100%);
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  color: #111827;
  margin-bottom: 1.25rem;
  font-weight: 700;
  background: linear-gradient(90deg, #3b82f6, #10b981);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.6;
`;

// Desktop Grid View
const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Mobile Carousel View
const MobileCarousel = styled.div`
  display: none;
  position: relative;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateX(${({ $currentIndex }) => -$currentIndex * 100}%);
  will-change: transform;
`;

// Shared Card Styles
const TestimonialCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  flex: 0 0 calc(100% - 2rem);
  margin: 0 1rem;
  box-sizing: border-box;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.03);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 769px) {
    margin: 0;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 2rem;
  position: relative;
  padding-left: 2rem;
  font-weight: 400;

  &::before {
    content: '"';
    position: absolute;
    left: 0;
    top: -1rem;
    font-size: 4rem;
    color: rgba(79, 172, 254, 0.15);
    font-family: serif;
    line-height: 1;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  gap: 0.25rem;
`;

const Star = styled.span`
  color: ${({ $filled }) => ($filled ? '#FFD700' : '#E5E7EB')};
  font-size: 1.4rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const AuthorImage = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: #f3f4f6;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  color: #111827;
  font-weight: 600;
`;

const AuthorRole = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  font-weight: 500;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.75rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Dot = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: ${({ $active }) => ($active ? '#3b82f6' : '#e5e7eb')};
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(${({ $active }) => ($active ? 1.2 : 1)});
`;

const testimonials = [
  {
    id: 1,
    quote: "I loved the way teacher taught us very nicely, the knowledge which I got from here can be implemented in real world",
    name: "Bibek Kshetri",
    role: "Web Development Course",
    image: BibekImage,
    rating: 4
  },
  {
    id: 2,
    quote: "I am fascinate with the teaching method of this center. I have learn a lot about basic computer courses which will be very beneficial for my future study.",
    name: "Hemant Oli",
    role: "Basic Computer Skills Training",
    image: HemantImage,
    rating: 5
  },
  {
    id: 3,
    quote: "Best decision I made for my personal development. The hands-on projects gave me the confidence to use computer smoothly.",
    name: "Kabita Dhungena",
    role: "Basic computer skills Training",
    image: KabitaImage,
    rating: 4
  },
  {
    id: 4,
    quote: "The quality of education exceeded my expectations. I went from beginner to job-ready in just 1.5 months.",
    name: "Sanjay Thapa",
    role: "Computer Repairing course",
    image: SanjayImage,
    rating: 5
  },
  {
    id: 5,
    quote: "Fees are affordable, all the computers and equipment are in good conditions. Best place in city to get knowledge about Computers.",
    name: "Laxman Shrestha",
    role: "Computer Repairing course",
    image: LaxmanImage,
    rating: 4
  }
];

const StarRating = ({ rating }) => {
  return (
    <StarsContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} $filled={star <= rating}>
          ★
        </Star>
      ))}
    </StarsContainer>
  );
};

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStart = useRef(null);
  const carouselRef = useRef(null);

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
          <SectionSubtitle>Hear what our students say about their learning experience with us</SectionSubtitle>
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
                    loading="lazy"
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
            ref={carouselRef}
            $currentIndex={currentIndex}
            onTouchStart={(e) => touchStart.current = e.touches[0].clientX}
            onTouchEnd={(e) => {
              if (!touchStart.current) return;
              const touchEnd = e.changedTouches[0].clientX;
              const diff = touchStart.current - touchEnd;
              if (Math.abs(diff) > 50) {
                handleSwipe(diff > 0 ? 'left' : 'right');
              }
              touchStart.current = null;
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
                      loading="lazy"
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
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </DotsContainer>
        </MobileCarousel>
      </Container>
    </TestimonialsWrapper>
  );
};