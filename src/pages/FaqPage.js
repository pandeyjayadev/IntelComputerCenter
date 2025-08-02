import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQWrapper = styled.section`
  padding: 6rem 0;
  background-color: #f9fafb;
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

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto;
`;

const FAQCategories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const CategoryButton = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  background: ${({ active }) => (active ? '#4facfe' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#4b5563')};
  border: 1px solid ${({ active }) => (active ? '#4facfe' : '#e5e7eb')};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ active }) => (active ? '0 4px 15px rgba(79, 172, 254, 0.2)' : 'none')};

  &:hover {
    background: ${({ active }) => (active ? '#3a9bed' : '#f3f4f6')};
  }
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: #111827;
  font-size: 1.1rem;
`;

const FAQAnswer = styled.div`
  padding: 0 1.5rem;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  border-top: ${({ isOpen }) => (isOpen ? '1px solid #e5e7eb' : 'none')};
  color: #4b5563;
  line-height: 1.7;

  p {
    padding: 1.5rem 0;
    margin: 0;
  }
`;

const FAQData = {
  general: [
    {
      question: "What is Intel Computer Institute?",
      answer: "Intel Computer Institute is a leading computer training center in Gulariya, Bardiya, offering comprehensive digital education programs for students of all skill levels."
    },
    {
      question: "Who can join your courses?",
      answer: "Our courses are open to everyone - school students, college students, job seekers, professionals, and even homemakers who want to learn computer skills."
    },
    {
      question: "Do I need any prior knowledge to start?",
      answer: "No prior knowledge is required for our basic courses. We start from the very fundamentals and gradually build up your skills."
    }
  ],
  courses: [
    {
      question: "What types of courses do you offer?",
      answer: "We offer a wide range of courses including Basic Computer, MS Office, Graphic Design, Web Development, Accounting Software (Tally), and specialized student packages."
    },
    {
      question: "How long is each course?",
      answer: "Course duration varies from 1 month for basic courses up to 6 months for advanced programs. Most standard courses are 2-3 months long."
    },
    {
      question: "Are your courses certified?",
      answer: "Yes, we provide government-recognized certificates upon successful completion of all our courses."
    }
  ],
  admission: [
    {
      question: "What are the class timings?",
      answer: "We offer flexible batches - morning (7-9 AM), day (11 AM-1 PM), and evening (4-6 PM). Special batches can be arranged for groups."
    },
    {
      question: "Can I switch my batch if needed?",
      answer: "Yes, you can change your batch with prior notice, subject to availability of seats in the desired batch."
    },
    {
      question: "How many students per batch?",
      answer: "We maintain small batch sizes of 5-10 students to ensure personalized attention for each learner."
    }
  ],
  fees: [
    {
      question: "How much do courses cost?",
      answer: "Course fees range from NPR 1,500 for basic courses to NPR 8,000 for advanced programs. Contact us for specific course pricing."
    },
    {
      question: "Do you offer any discounts?",
      answer: "Yes, we provide discounts for early registration, group enrollments, and students from economically disadvantaged backgrounds."
    },
    {
      question: "Can I pay in installments?",
      answer: "We offer flexible payment plans with installment options for most courses. Please inquire about available payment plans."
    }
  ]
};

export const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <FAQWrapper id="faq">
      <Container>
        <SectionHeader>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionSubtitle>
            Find answers to common questions about our courses, admission process, fees, and more.
          </SectionSubtitle>
        </SectionHeader>

        <FAQCategories>
          <CategoryButton 
            active={activeCategory === 'general'} 
            onClick={() => setActiveCategory('general')}
          >
            General
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'courses'} 
            onClick={() => setActiveCategory('courses')}
          >
            Courses
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'admission'} 
            onClick={() => setActiveCategory('admission')}
          >
            Admission
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'fees'} 
            onClick={() => setActiveCategory('fees')}
          >
            Fees
          </CategoryButton>
        </FAQCategories>

        <FAQList>
          {FAQData[activeCategory].map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => toggleQuestion(index)}>
                {item.question}
                {openQuestion === index ? <FaChevronUp /> : <FaChevronDown />}
              </FAQQuestion>
              <FAQAnswer isOpen={openQuestion === index}>
                <p>{item.answer}</p>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </FAQWrapper>
  );
};