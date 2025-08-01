import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { FiSearch, FiClock, FiCalendar, FiDollarSign } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CoursesWrapper = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.light};
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.dark};
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  padding-left: 3rem;
  border: 2px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: 50px;
  font-size: 1rem;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text}80;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const CourseCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CourseImage = styled.div`
  height: 180px;
  background-color: ${({ theme }) => theme.colors.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
`;

const CourseContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CourseTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.dark};
`;

const CourseDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text}80;
  font-size: 0.9rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const NoResults = styled.div`
  text-align: center;
  grid-column: 1 / -1;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const EnrollButton = styled(Link)`
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const coursesData = [
  {
    id: 1,
    title: "Basic Computer Course",
    description: "MS Word, MS Excel, MS PowerPoint, File management, Typing (Nepali & English), Internet, Email, Printing, Scanning.",
    duration: "2 Months",
    schedule: "Morning/Evening",
    price: "NPR 5,000",
    icon: "💻"
  },
  {
    id: 2,
    title: "Computer Hardware & Maintenance",
    description: "Introduction to computer parts, assembling/disassembling, formatting, installing Windows, basic troubleshooting.",
    duration: "1.5 Months",
    schedule: "Weekends",
    price: "NPR 6,500",
    icon: "🔧"
  },
  {
    id: 3,
    title: "Graphics Design (Basic)",
    description: "Adobe Photoshop (basic), Canva, Photo editing, ID/Passport photo making.",
    duration: "2 Months",
    schedule: "Flexible",
    price: "NPR 7,000",
    icon: "🎨"
  },
  {
    id: 4,
    title: "Typing Course",
    description: "Nepali Typing (Preeti, Unicode), English Typing, Speed & accuracy improvement.",
    duration: "1 Month",
    schedule: "Morning/Evening",
    price: "NPR 3,500",
    icon: "⌨️"
  },
  {
    id: 5,
    title: "Internet & Digital Skills",
    description: "Using browsers, emails, Google tools (Drive, Docs), online forms, social media basics, safety & privacy.",
    duration: "1 Month",
    schedule: "Flexible",
    price: "NPR 4,000",
    icon: "🌐"
  },
  {
    id: 6,
    title: "Office Package Course",
    description: "Focused on MS Word, Excel, PowerPoint, and practical office file handling.",
    duration: "1.5 Months",
    schedule: "Morning/Evening",
    price: "NPR 5,500",
    icon: "📊"
  },
  {
    id: 7,
    title: "SEE & +2 Student Computer Package",
    description: "Tailored for school students: Basic computer + internet + typing + project preparation + printing.",
    duration: "2 Months",
    schedule: "After School",
    price: "NPR 6,000",
    icon: "🎓"
  },
  {
    id: 8,
    title: "Tally / Accounting Software",
    description: "Introduction to digital accounting, company creation, ledgers, journal entries.",
    duration: "2 Months",
    schedule: "Weekends",
    price: "NPR 8,000",
    icon: "💰"
  },
  {
    id: 9,
    title: "Basic HTML & Website Overview",
    description: "Introduction to web browsers, basic HTML tags, structure of web pages.",
    duration: "1 Month",
    schedule: "Evening",
    price: "NPR 4,500",
    icon: "🖥️"
  },
  {
    id: 10,
    title: "Mobile & Smartphone Training",
    description: "For beginners: Using Android smartphones, installing apps, using digital wallets (Khalti, eSewa), QR code, camera, Wi-Fi, etc.",
    duration: "2 Weeks",
    schedule: "Flexible",
    price: "NPR 3,000",
    icon: "📱"
  }
];

export const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CoursesWrapper id="courses">
      <Container>
        <SectionTitle>Our Computer Courses</SectionTitle>
        
        <SearchContainer>
          <SearchIcon size={20} />
          <SearchInput
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        <CoursesGrid>
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id}>
                <CourseImage>
                  <span style={{ fontSize: '4rem' }}>{course.icon}</span>
                </CourseImage>
                <CourseContent>
                  <CourseTitle>{course.title}</CourseTitle>
                  <CourseDescription>{course.description}</CourseDescription>
                  <CourseMeta>
                    <MetaItem>
                      <FiClock size={16} />
                      {course.duration}
                    </MetaItem>
                    <MetaItem>
                      <FiCalendar size={16} />
                      {course.schedule}
                    </MetaItem>
                    <MetaItem>
                      <FiDollarSign size={16} />
                      {course.price}
                    </MetaItem>
                  </CourseMeta>
                  <EnrollButton to={`/enroll/${course.id}`}>Enroll Now</EnrollButton>
                </CourseContent>
              </CourseCard>
            ))
          ) : (
            <NoResults>
              <h3>No courses found matching your search</h3>
              <p>Try adjusting your search terms</p>
            </NoResults>
          )}
        </CoursesGrid>
      </Container>
    </CoursesWrapper>
  );
};