import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 3rem 0 1rem;
  position: relative;
  overflow: hidden;
`;

const FooterWave = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="%23ffffff" opacity=".1"/><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="%23ffffff" opacity=".1"/></svg>');
  background-size: cover;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 1.5rem;
  text-align: left;
`;

const FooterHeading = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 3px;
  }
`;

const FooterLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e6e6e6;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: #e6e6e6;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.3rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const NewsletterInput = styled.input`
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 30px;
  background: rgba(255,255,255,0.1);
  color: white;
  outline: none;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #ccc;
  }
  
  &:focus {
    background: rgba(255,255,255,0.2);
  }
`;

const NewsletterButton = styled.button`
  padding: 0.7rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  position: relative;
  z-index: 2;
`;

const DeveloperCredit = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterWave />
      <FooterContent>
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink to="/courses">Our Courses</FooterLink>
          <FooterLink to="/about">About Institute</FooterLink>
          <FooterLink to="/faculty">Our Faculty</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Contact Info</FooterHeading>
          <ContactInfo>
            <FaMapMarkerAlt />
            <span>Gulariya-07, Bardiya, Nepal</span>
          </ContactInfo>
          <ContactInfo>
            <FaPhone />
            <span>+977 1234567890</span>
          </ContactInfo>
          <ContactInfo>
            <FaEnvelope />
            <span>info@intelcomputer.edu.np</span>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Follow Us</FooterHeading>
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
      </FooterContent>

      <Copyright>
        <p>© {new Date().getFullYear()} Intel Computer Institute. All Rights Reserved.</p>
        <p>
          Developed by <DeveloperCredit href="https://pandeyj.com.np" target="_blank" rel="noopener noreferrer">Jayadev Pandey</DeveloperCredit>
        </p>
      </Copyright>
    </FooterWrapper>
  );
};