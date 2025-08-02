import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes, FaHome, FaBook, FaChalkboardTeacher, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { Link } from 'react-router-dom';

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

// Styled Components
const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  animation: ${fadeIn} 0.3s ease forwards;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.colors.dark};
  z-index: 1000;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.3s ease forwards;
  display: flex;
  flex-direction: column;
`;

const DrawerHeader = styled.div`
  padding: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const DrawerTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotate(90deg);
  }
`;

const DrawerContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  overflow-y: auto;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  color: #e6e6e6;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transform: translateX(5px);
  }
  
  svg {
    margin-right: 1.5rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const DrawerFooter = styled.div`
  padding: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
          <DrawerTitle>Menu</DrawerTitle>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </DrawerHeader>

        <DrawerContent>
          <NavList>
            <NavItem>
              <NavLink to="/" onClick={onClose}>
                <FaHome /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/courses" onClick={onClose}>
                <FaBook /> Courses
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/faculty" onClick={onClose}>
                <FaChalkboardTeacher /> Faculty
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/facilities" onClick={onClose}>
                <MdComputer /> Facilities
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" onClick={onClose}>
                <FaEnvelope /> Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/faq" onClick={onClose}>
                <FaQuestionCircle /> FAQ
              </NavLink>
            </NavItem>
          </NavList>
        </DrawerContent>

        <DrawerFooter>
           <p>Developed By : <a href='www.pandeyj.com.np '>Jayadev Pandey</a></p>
        </DrawerFooter>

        {/* <DrawerFooter>
          © {new Date().getFullYear()} Intel Computer Institute
        </DrawerFooter> */}
      </DrawerContainer>
    </>
  );
};