import styled, { keyframes } from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 4rem 0 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, rgba(120, 119, 198, 0.1), rgba(255, 119, 198, 0.1));
    border-radius: 50%;
    top: 10%;
    right: 10%;
    animation: ${float} 6s ease-in-out infinite;
    filter: blur(40px);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    background: linear-gradient(45deg, rgba(120, 219, 255, 0.1), rgba(120, 119, 198, 0.1));
    border-radius: 50%;
    bottom: 20%;
    left: 15%;
    animation: ${float} 8s ease-in-out infinite reverse;
    filter: blur(30px);
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const FooterSection = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(120, 119, 198, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(120, 119, 198, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(120, 119, 198, 0.5), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const FooterHeading = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
  background: linear-gradient(135deg, #fff 0%, #7877c6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #7877c6, #ff77c6);
    border-radius: 3px;
    transition: width 0.4s ease;
  }
  
  ${FooterSection}:hover &::after {
    width: 80px;
  }
`;

const FooterLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #e6e6e6;
  text-decoration: none;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #7877c6, #ff77c6);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #fff;
    transform: translateX(8px);
    padding-left: 0.5rem;
  }
  
  &:hover::before {
    width: 100%;
  }
  
  svg {
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    color: #7877c6;
    transform: scale(1.1);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  color: #e6e6e6;
  padding: 0.8rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(4px);
  }
  
  svg {
    color: #7877c6;
    font-size: 1.2rem;
    min-width: 20px;
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
    animation: ${pulse} 2s infinite;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.3rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(120, 119, 198, 0.2), rgba(255, 119, 198, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #7877c6, #ff77c6);
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 10px 20px rgba(120, 119, 198, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const NewsletterInput = styled.input`
  padding: 1rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  outline: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: #7877c6;
    box-shadow: 0 0 0 3px rgba(120, 119, 198, 0.1);
  }
`;

const NewsletterButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #7877c6 0%, #ff77c6 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #9694d4 0%, #ff95d4 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(120, 119, 198, 0.4);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 2rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  
  p {
    margin: 0.5rem 0;
    color: #ccc;
    font-size: 0.9rem;
  }
`;

const DeveloperCredit = styled.a`
  color: #7877c6;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #7877c6, #ff77c6);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #ff77c6;
    background: linear-gradient(135deg, #7877c6, #ff77c6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NewsletterSection = styled(FooterSection)`
  background: linear-gradient(135deg, rgba(120, 119, 198, 0.05), rgba(255, 119, 198, 0.05));
`;

export const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <FooterWrapper>
      <FloatingElements />
      <FooterContent>
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink to="/courses">
            <FaArrowRight size={12} />
            Our Courses
          </FooterLink>
          <FooterLink to="/about">
            <FaArrowRight size={12} />
            About Institute
          </FooterLink>
          <FooterLink to="/faculty">
            <FaArrowRight size={12} />
            Our Faculty
          </FooterLink>
          <FooterLink to="/contact">
            <FaArrowRight size={12} />
            Contact Us
          </FooterLink>
          <FooterLink to="/faq">
            <FaArrowRight size={12} />
            FAQ
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Contact Info</FooterHeading>
          <ContactInfo>
            <FaMapMarkerAlt />
            <span>DDC Road, Gulariya-07, Bardiya, Nepal</span>
          </ContactInfo>
          <ContactInfo>
            <FaPhone />
            <span>+977 9848489582 / 9812494560</span>
          </ContactInfo>
          <ContactInfo>
            <FaEnvelope />
            <span>intel2070@gmail.com</span>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Follow Us</FooterHeading>
          <p style={{ color: '#ccc', marginBottom: '1rem', fontSize: '0.9rem' }}>
            Stay connected with us on social media for updates and insights.
          </p>
          <SocialIcons>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>

        {/* <NewsletterSection>
          <FooterHeading>Newsletter</FooterHeading>
          <p style={{ color: '#ccc', marginBottom: '1rem', fontSize: '0.9rem' }}>
            Subscribe to get the latest updates and course announcements.
          </p>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput 
              type="email" 
              placeholder="Enter your email address"
              required
            />
            <NewsletterButton type="submit">
              <FaPaperPlane />
              Subscribe Now
            </NewsletterButton>
          </NewsletterForm>
        </NewsletterSection> */}
      </FooterContent>

      <Copyright>
        <p>
          Developed by <DeveloperCredit href="https://pandeyj.com.np" target="_blank" rel="noopener noreferrer">Jayadev Pandey</DeveloperCredit>
        </p>
      </Copyright>
    </FooterWrapper>
  );
};