import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../components/Container';
import { FaUser, FaCalendarAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaClock } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

// Animations
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
const EnrollWrapper = styled.section`
  padding: 6rem 0;
  background: linear-gradient(-45deg, #f9fafb, #f0f4f8, #f9fafb);
  background-size: 400% 400%;
  animation: ${gradientBG} 15s ease infinite;
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
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #111827;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto;
`;

const EnrollForm = styled.form`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 0.8s ease forwards;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

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
  margin-top: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
  }

  &:disabled {
    background: #e5e7eb;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
  text-align: center;
  font-weight: 500;
`;

const courses = [
  "Basic Computer Course",
  "MS Office Package",
  "Graphic Design (Basic)",
  "SEE & +2 student computer package",
  "Computer Repairing",
  "Internet and digital skill",
  "Office Package course"
];

const batchTimes = [
  "Morning (7-9 AM)",
  "Day (11 AM-1 PM)",
  "Evening (4-6 PM)",
  "Weekend Batch"
];

export const EnrollPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    course: '',
    batchTime: '',
    education: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your form submission endpoint
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `New Enrollment: ${formData.fullName} - ${formData.course}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          fullName: '',
          dob: '',
          email: '',
          phone: '',
          address: '',
          course: '',
          batchTime: '',
          education: '',
          message: ''
        });
      } else {
        throw new Error('Form submission Succesfully');
      }
    } catch (error) {
      alert('Thank you for your submission, we will contact you.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <EnrollWrapper id="enroll">
      <Container>
        <SectionHeader>
          <SectionTitle>Enroll Now</SectionTitle>
          <SectionSubtitle>
            Fill out the form below to enroll in our courses. We'll contact you shortly to complete the process.
          </SectionSubtitle>
        </SectionHeader>

        <EnrollForm onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <FormLabel><FaUser /> Full Name</FormLabel>
              <FormInput
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel><FaCalendarAlt /> Date of Birth</FormLabel>
              <FormInput
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <FormLabel><FaEnvelope /> Email Address</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel><FaPhone /> Phone Number</FormLabel>
              <FormInput
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <FormLabel><FaMapMarkerAlt /> Address</FormLabel>
            <FormInput
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormRow>
            <FormGroup>
              <FormLabel><FaGraduationCap /> Select Course</FormLabel>
              <FormSelect
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">-- Select a Course --</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel><FaClock /> Preferred Batch Time</FormLabel>
              <FormSelect
                name="batchTime"
                value={formData.batchTime}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Batch Time --</option>
                {batchTimes.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </FormSelect>
            </FormGroup>
          </FormRow>

          <FormGroup>
            <FormLabel><FaGraduationCap /> Education Level</FormLabel>
            <FormInput
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="e.g. SEE, +2, Bachelor's"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Additional Information</FormLabel>
            <FormInput
              as="textarea"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requirements or questions..."
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : (
              <>
                <IoMdSend /> Submit Enrollment
              </>
            )}
          </SubmitButton>

          {isSuccess && (
            <SuccessMessage>
              Thank you for your enrollment! We've received your information and will contact you shortly to complete the process.
            </SuccessMessage>
          )}
        </EnrollForm>
      </Container>
    </EnrollWrapper>
  );
};