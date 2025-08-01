import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom'; // Changed import
import { FaBars } from 'react-icons/fa';
import { Drawer } from './drawer';

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(RouterNavLink)`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  span {
    color: #4facfe;
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(RouterNavLink)`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: calc(100% - 2rem);
  }

  &.active {
    color: white;
    &::before {
      width: calc(100% - 2rem);
    }
  }
`;

const CTAButton = styled(RouterNavLink)`
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
  }
`;

const MobileMenuButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    display: flex;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <Logo to="/">
            Intel<span>Computer</span>
          </Logo>

          <DesktopNav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <CTAButton to="/enroll">Enroll Now</CTAButton>
          </DesktopNav>

          <MobileMenuButton onClick={toggleDrawer}>
            <FaBars />
          </MobileMenuButton>
        </HeaderContent>
      </HeaderWrapper>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
};