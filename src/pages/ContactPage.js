import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../components/Container';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

// Reuse animations from About page
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientBG = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const ContactWrapper = styled.section`
  padding: 8rem 0;
  background: linear-gradient(-45deg, #f9fafb, #f0f4f8, #f9fafb);
  background-size: 400% 400%;
  animation: ${gradientBG} 15s ease infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234facfe' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  position: relative;
  animation: ${fadeIn} 0.8s ease forwards;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #111827;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  color: #4b5563;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  color: #111827;
  margin-bottom: 0;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 0;
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.7);

  &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.7);

  &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
  }
`;

const MapContainer = styled.div`
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;
`;

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <ContactWrapper id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>
            Have questions or want to enroll? Reach out to us through any of these channels.
          </SectionSubtitle>
        </SectionHeader>

        <ContactContent>
          <ContactInfo>
            <InfoCard>
              <InfoHeader>
                <InfoIcon>
                  <FaMapMarkerAlt />
                </InfoIcon>
                <InfoTitle>Our Location</InfoTitle>
              </InfoHeader>
              <InfoText>
                Gulariya-07, Main Road<br />
                Bardiya, Nepal
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoHeader>
                <InfoIcon>
                  <FaPhone />
                </InfoIcon>
                <InfoTitle>Contact Us</InfoTitle>
              </InfoHeader>
              <InfoText>
                Phone: +977 9848489582<br />
                Email: intel2070@gmail.com
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoHeader>
                <InfoIcon>
                  <FaClock />
                </InfoIcon>
                <InfoTitle>Opening Hours</InfoTitle>
              </InfoHeader>
              <InfoText>
                Sunday - Friday: 7AM - 7PM<br />
                Saturday: 9AM - 5PM
              </InfoText>
            </InfoCard>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Full Name</FormLabel>
              <FormInput 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <FormInput 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Phone Number</FormLabel>
              <FormInput 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Your Message</FormLabel>
              <FormTextarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>

            <SubmitButton type="submit">
              <IoMdSend /> Send Message
            </SubmitButton>
          </ContactForm>
        </ContactContent>

        <MapContainer>
          <iframe 
            title="Institute Location"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            src="https://maps.google.com/maps?q=gulariya,bardiya&output=embed"
            style={{ border: 'none' }}
          ></iframe>
        </MapContainer>
      </Container>
    </ContactWrapper>
  );
};