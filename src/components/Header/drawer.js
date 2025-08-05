import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes, FaHome, FaBook, FaChalkboardTeacher, FaEnvelope, FaQuestionCircle, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Theme colors
const theme = {
  colors: {
    primary: '#031469ff',
    secondary: '#1e40af',
    accent: '#3b82f6',
    light: '#f8fafc',
    dark: '#051b3dff',
    text: '#334155',
  }
};

// Animations
const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

// Styled Components
const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(3, 20, 105, 0.4);
  backdrop-filter: blur(4px);
  z-index: 999;
  animation: ${fadeIn} 0.3s ease forwards;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background: linear-gradient(135deg, 
    ${theme.colors.dark} 0%, 
    ${theme.colors.primary} 50%, 
    ${theme.colors.dark} 100%
  );
  z-index: 1000;
  box-shadow: -8px 0 32px rgba(3, 20, 105, 0.4);
  animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  display: flex;
  flex-direction: column;
  border-left: 2px solid rgba(59, 130, 246, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.05) 0%, 
      transparent 50%, 
      rgba(30, 64, 175, 0.05) 100%
    );
    pointer-events: none;
  }
`;

const DrawerHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(59, 130, 246, 0.2);
  position: relative;
  background: rgba(59, 130, 246, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      ${theme.colors.accent} 50%, 
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
  }
`;

const DrawerTitle = styled.h3`
  color: ${theme.colors.light};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.secondary});
    border-radius: 2px;
    margin-right: 0.75rem;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const CloseButton = styled.button`
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: ${theme.colors.light};
  font-size: 1.25rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.secondary});
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
  }
  
  &:hover {
    transform: scale(1.05) rotate(90deg);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    
    &::before {
      opacity: 0.2;
    }
  }
  
  svg {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(-90deg);
  }
`;

const DrawerContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(59, 130, 246, 0.1);
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.secondary});
    border-radius: 3px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.75rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  color: rgba(248, 250, 252, 0.9);
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  font-weight: 500;
  border: 1px solid transparent;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.2) 0%, 
      rgba(30, 64, 175, 0.2) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 12px;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 60%;
    background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.secondary});
    border-radius: 0 4px 4px 0;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    background: rgba(59, 130, 246, 0.15);
    color: ${theme.colors.light};
    transform: translateX(8px);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      width: 4px;
    }
  }
  
  svg {
    margin-right: 1rem;
    font-size: 1.25rem;
    color: ${theme.colors.accent};
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }
  
  &:hover svg {
    color: ${theme.colors.light};
    transform: scale(1.1);
  }
  
  span {
    position: relative;
    z-index: 1;
    font-size: 1rem;
  }
`;

const CTASection = styled.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(59, 130, 246, 0.2);
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
`;

const CTAButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.secondary} 100%);
  color: ${theme.colors.light};
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.accent} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 25px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background: rgba(248, 250, 252, 0.2);
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      width: 100px;
      height: 100px;
    }
  }
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.1rem;
    position: relative;
    z-index: 1;
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`;

const DrawerFooter = styled.div`
  padding: 1.5rem;
  text-align: center;
  color: rgba(248, 250, 252, 0.7);
  font-size: 0.875rem;
  border-top: 1px solid rgba(59, 130, 246, 0.2);
  background: rgba(59, 130, 246, 0.05);
  
  p {
    margin: 0;
    line-height: 1.5;
  }
  
  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${theme.colors.light};
      text-decoration: underline;
    }
  }
`;

export const Drawer = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <DrawerOverlay $isOpen={isOpen} onClick={onClose} />

      <DrawerContainer $isOpen={isOpen}>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </DrawerHeader>

        <DrawerContent>
          <NavList>
            <NavItem>
              <NavLink to="/" onClick={onClose}>
                <FaHome />
                <span>Home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/courses" onClick={onClose}>
                <FaBook />
                <span>Courses</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={onClose}>
                <FaChalkboardTeacher />
                <span>About</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" onClick={onClose}>
                <FaEnvelope />
                <span>Contact</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/faq" onClick={onClose}>
                <FaQuestionCircle />
                <span>FAQ</span>
              </NavLink>
            </NavItem>
                        <NavItem>
              <NavLink to="/gallery" onClick={onClose}>
                <FaQuestionCircle />
                <span>Gallery</span>
              </NavLink>
            </NavItem>
          </NavList>
        </DrawerContent>

        <CTASection>
          <CTAButton to="/enroll" onClick={onClose}>
            <FaUserGraduate />
            <span>Enroll Now</span>
          </CTAButton>
        </CTASection>

        <DrawerFooter>
          <p>Developed By: <a href="https://www.pandeyj.com.np" target="_blank" rel="noopener noreferrer">Jayadev Pandey</a></p>
        </DrawerFooter>
      </DrawerContainer>
    </>
  );
};