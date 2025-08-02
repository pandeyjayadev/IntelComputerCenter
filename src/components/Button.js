import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

// Animation definitions
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Base button styles
const BaseButton = styled.button`
  padding: 0.8rem 2.2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      ${({ theme }) => theme.colors.primary}, 
      ${({ theme }) => theme.colors.secondary});
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    ${css`animation: ${pulse} 0.5s ease;`}

    &:before {
      opacity: ${({ primary }) => (primary ? '1' : '0')};
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }
`;

// Primary and secondary button variants
export const Button = styled(BaseButton)`
  background: ${({ primary, theme }) => 
    primary 
      ? `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`
      : 'white'};
  color: ${({ primary, theme }) => 
    primary ? 'white' : theme.colors.primary};
  border: 2px solid ${({ primary, theme }) => 
    primary ? 'transparent' : theme.colors.primary};
  background-size: ${({ primary }) => (primary ? '200% 200%' : 'auto')};
  ${({ primary }) => primary && css`animation: ${gradientFlow} 3s ease infinite;`}

  &:hover {
    color: ${({ primary }) => (primary ? 'white' : 'inherit')};
    background: ${({ primary, theme }) => 
      primary 
        ? `linear-gradient(45deg, ${theme.colors.secondary}, ${theme.colors.primary})`
        : 'rgba(37, 99, 235, 0.05)'};
  }
`;

// ButtonLink component with the same enhancements
export const ButtonLink = styled(Link)`
  padding: 0.8rem 2.2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      ${({ theme }) => theme.colors.primary}, 
      ${({ theme }) => theme.colors.secondary});
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  background: ${({ primary, theme }) => 
    primary 
      ? `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`
      : 'white'};
  color: ${({ primary, theme }) => 
    primary ? 'white' : theme.colors.primary};
  border: 2px solid ${({ primary, theme }) => 
    primary ? 'transparent' : theme.colors.primary};
  background-size: ${({ primary }) => (primary ? '200% 200%' : 'auto')};
  ${({ primary }) => primary && css`animation: ${gradientFlow} 3s ease infinite;`}

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    ${css`animation: ${pulse} 0.5s ease;`}
    color: ${({ primary, theme }) => (primary ? 'white' : theme.colors.secondary)};
    background: ${({ primary, theme }) => 
      primary 
        ? `linear-gradient(45deg, ${theme.colors.secondary}, ${theme.colors.primary})`
        : 'rgba(37, 99, 235, 0.05)'};

    &:before {
      opacity: ${({ primary }) => (primary ? '1' : '0')};
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }
`;