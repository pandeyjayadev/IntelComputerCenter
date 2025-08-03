import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { FaBars, FaStar, FaGraduationCap, FaRocket } from 'react-icons/fa';
import { Drawer } from './drawer';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

const TopBarWrapper = styled.div`
  background: linear-gradient(135deg, 
    #051b3dff 0%, 
    #031469ff 25%, 
    #1e40af 50%, 
    #3b82f6 75%, 
    #051b3dff 100%
  );
  color: #f8fafc;
  position: fixed;
  width: 100%;
  z-index: 1001;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(${props => props.isVisible ? '0' : '-100%'});
  border-bottom: 1px solid rgba(59, 130, 246, 0.3);
  box-shadow: 0 2px 10px rgba(3, 20, 105, 0.2);
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(59, 130, 246, 0.1) 50%, 
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 4s ease-in-out infinite;
    pointer-events: none;
  }
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  position: relative;
  z-index: 1;
  
  .icon {
    margin: 0 0.5rem;
    color: #3b82f6;
    animation: ${float} 2s ease-in-out infinite;
    font-size: 1rem;
    
    &:nth-child(2) { animation-delay: 0.5s; }
    &:nth-child(4) { animation-delay: 1s; }
  }
  
  .highlight {
    color: #3b82f6;
    font-weight: 600;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, #3b82f6, #1e40af);
      animation: ${pulse} 2s ease-in-out infinite;
    }
  }
`;

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, 
    #031469ff 0%, 
    #051b3dff 50%, 
    #031469ff 100%
  );
  color: #f8fafc;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(3, 20, 105, 0.25);
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
  top: ${props => props.topBarHeight}px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  
  @media (max-width: 767px) {
    top: 0;
  }
  
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

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Logo = styled(RouterNavLink)`
  font-size: 1.75rem;
  font-weight: 700;
  color: #f8fafc;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.showLogo ? 1 : 0};
  transform: ${props => props.showLogo ? 'translateX(0) scale(1)' : 'translateX(-15px) scale(0.95)'};
  position: relative;
  
  &:hover {
    transform: ${props => props.showLogo ? 'translateY(-2px) scale(1.02)' : 'translateX(-15px) scale(0.95)'};
    filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3));
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -6px;
    background: linear-gradient(135deg, #3b82f6, #1e40af);
    border-radius: 8px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.1;
  }
  
  span {
    background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #1e40af);
      border-radius: 1px;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
  }
  
  &:hover span::after {
    transform: scaleX(1);
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(RouterNavLink)`
  color: rgba(248, 250, 252, 0.9);
  text-decoration: none;
  font-weight: 900;
  font-size: 1.2rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.1) 0%, 
      rgba(30, 64, 175, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6 0%, #1e40af 100%);
    border-radius: 1px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    color: #f8fafc;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      width: calc(100% - 1rem);
    }
  }
  
  &.active {
    color: #f8fafc;
    background: rgba(59, 130, 246, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.3);
    
    &::after {
      width: calc(100% - 1rem);
    }
  }
`;

const CTAButton = styled(RouterNavLink)`
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  color: #f8fafc;
  padding: 0.625rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
  margin-left: 0.75rem;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px;
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
      width: 80px;
      height: 80px;
    }
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`;

const MobileMenuButton = styled.button`
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.2) 0%, 
    rgba(30, 64, 175, 0.2) 100%
  );
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #f8fafc;
  font-size: 1.25rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: none;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #3b82f6, #1e40af);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  &:hover {
    transform: scale(1.05);
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
    transform: scale(1.1);
  }
`;

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  const topBarHeight = isHomePage && isTopBarVisible && window.innerWidth >= 768 ? 46 : 0;
  const showLogo = isHomePage && window.innerWidth >= 768 ? !isTopBarVisible : true;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (scrollDirection !== 'down') {
          setScrollDirection('down');
          if (isHomePage) {
            setIsTopBarVisible(false);
          }
        }
      } else if (currentScrollY < lastScrollY) {
        if (scrollDirection !== 'up') {
          setScrollDirection('up');
          if (isHomePage && currentScrollY < 50) {
            setIsTopBarVisible(true);
          }
        }
      }
      
      if (currentScrollY === 0 && isHomePage) {
        setIsTopBarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, scrollDirection, isHomePage]);

  useEffect(() => {
    if (isHomePage) {
      setIsTopBarVisible(true);
    }
  }, [isHomePage]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {isHomePage && (
        <TopBarWrapper isVisible={isTopBarVisible}>
          <TopBarContent>
            <FaRocket className="icon" />
            Welcome to &nbsp; <span className="highlight"> IntelComputer</span>
            <FaStar className="icon" />
            Registration No: 116/2945/2074/075
            <FaGraduationCap className="icon" />
          </TopBarContent>
        </TopBarWrapper>
      )}
      
      <HeaderWrapper topBarHeight={topBarHeight}>
        <HeaderContent>
          <Logo to="/" showLogo={showLogo}>
            Intel<span>Computer</span>
          </Logo>
          
          <DesktopNav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <CTAButton to="/enroll">
              <span>Enroll Now</span>
            </CTAButton>
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