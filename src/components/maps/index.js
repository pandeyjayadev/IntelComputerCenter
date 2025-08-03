import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
    background-color: #f0f0f0;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px 20px 20px; /* top padding 30px */
    box-sizing: border-box;

    /* Mobile styles */
    @media (max-width: 768px) {
        padding: 50px 10px 50px 10px; /* top padding 30px on mobile */
        height: 70vh; /* Shorter height on mobile */
        
        iframe {
            width: 100% !important; /* Full width on mobile */
            height: 100% !important; /* Full height of container */
            border-radius: 0 !important; /* Remove border radius */
            box-shadow: none !important; /* Remove shadow on mobile */
            border: 5px solid white !important; /* Add white border */
        }
    }

    /* Desktop styles */
    @media (min-width: 769px) {
        iframe {
            transition: all 0.3s ease;
            
            &:hover {
                box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
                transform: translateY(-5px);
            }
        }
    }
`;

const GoogleMapEmbed = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.0127602538205!2d81.3419519760125!3d28.20692490327969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39988f006b1a1371%3A0x78d57bbf33ce01b0!2sIntel%20Computer%20Center!5e0!3m2!1sen!2snp!4v1754202501903!5m2!1sen!2snp"
        width="90%"
        height="80%"
        style={{ 
          border: '2px solid white',
          borderRadius: '2px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Intel Computer Center Location"
      />
    </MapContainer>
  );
};

export default GoogleMapEmbed;