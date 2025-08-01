import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { useInView } from 'react-intersection-observer';

const StatsWrapper = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const StatItem = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const StatNumber = styled.div`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: 1.25rem;
  opacity: 0.9;
`;

// Counter animation component
const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
};

const statsData = [
  { number: 3000, label: 'Certified Students' },
  { number: 15, label: 'Courses Available' },
  { number: 5, label: 'Qualified Instructors' },
  { number: 3, label: 'Placement Partners' },
];

export const Stats = () => {
  return (
    <StatsWrapper id="stats">
      <Container>
        <StatsGrid>
          {statsData.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>
                <Counter target={stat.number} />
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </Container>
    </StatsWrapper>
  );
};