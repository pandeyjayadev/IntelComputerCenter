import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BaseButton = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const Button = styled(BaseButton)`
  background-color: ${({ primary, theme }) => 
    primary ? theme.colors.primary : 'transparent'};
  color: ${({ primary, theme }) => 
    primary ? 'white' : theme.colors.primary};
  border: 2px solid ${({ primary, theme }) => 
    primary ? theme.colors.primary : theme.colors.primary};

  &:hover {
    background-color: ${({ primary, theme }) => 
      primary ? theme.colors.secondary : 'rgba(37, 99, 235, 0.1)'};
    border-color: ${({ primary, theme }) => 
      primary ? theme.colors.secondary : theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

export const ButtonLink = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${({ primary, theme }) => 
    primary ? theme.colors.primary : 'transparent'};
  color: ${({ primary, theme }) => 
    primary ? 'white' : theme.colors.primary};
  border: 2px solid ${({ primary, theme }) => 
    primary ? theme.colors.primary : theme.colors.primary};

  &:hover {
    background-color: ${({ primary, theme }) => 
      primary ? theme.colors.secondary : 'rgba(37, 99, 235, 0.1)'};
    border-color: ${({ primary, theme }) => 
      primary ? theme.colors.secondary : theme.colors.secondary};
    transform: translateY(-2px);
    color: ${({ primary, theme }) => 
      primary ? 'white' : theme.colors.secondary};
  }
`;