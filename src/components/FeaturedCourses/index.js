import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { FiClock, FiCalendar, FiDollarSign } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

// Import your course images (make sure to add these images to your project)


const FeaturedWrapper = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.light};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.dark};
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
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CourseImage = styled.div`
  height: 180px;
  background-color: ${({ theme }) => theme.colors.primary}20;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  span {
    position: relative;
    z-index: 1;
  }
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

const featuredCourses = [
    {
    id: 1,
    title: "Basic Computer Course",
    description: "Fundamentals of comptuter, Multimedia, Disk Managment, MS Word, MS Excel, MS PowerPoint, File management, Typing (Nepali & English), Internet, Email, Printing, Scanning.",
    duration: "3 Months",
    schedule: "Morning/Evening",
    price: "NPR 3,500",
    icon: "💻"
  },
  {
    id: 2,
    title: "Computer Repairing ",
    description: "Introduction to computer parts, assembling/disassembling, formatting, installing Windows, basic troubleshooting.",
    duration: "1.5 Months",
    schedule: "Weekends",
    price: "NPR 2,500",
    icon: "🔧"
  },
  {
    id: 3,
    title: "Graphics Design (Basic)",
    description: "Adobe Photoshop (basic), Canva, Photo editing, ID/Passport photo making.",
    duration: "2 Months",
    schedule: "Flexible",
    price: "NPR 6,000",
    icon: "🎨"
  },
];

export const FeaturedCourses = () => {
  return (
    <FeaturedWrapper id="featured-courses">
      <Container>
        <SectionHeader>
          <SectionTitle>Featured Courses</SectionTitle>
          <Button primary as="a" href='/courses'>All Courses</Button>
        </SectionHeader>
        
        <CoursesGrid>
          {featuredCourses.map(course => (
            <CourseCard key={course.id}>
              <CourseImage image={course.image}>
                <span>{course.icon}</span>
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
                    {course.price}
                  </MetaItem>
                </CourseMeta>
              </CourseContent>
            </CourseCard>
          ))}
        </CoursesGrid>
      </Container>
    </FeaturedWrapper>
  );
};