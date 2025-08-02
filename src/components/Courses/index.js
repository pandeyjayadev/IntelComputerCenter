import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { FiSearch, FiClock, FiCalendar, FiDollarSign } from 'react-icons/fi';
import { CoursesPage } from './pages/CoursesPage';

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
  // ... (include all other courses from your original list)
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