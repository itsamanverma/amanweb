import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import './HeroSection.css'; // Import the custom CSS file


const HeroContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center center;
`;

const Overlay = styled('div')`
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: -1;
`;

const HeroContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding: 0 50px;
  position: relative;
  z-index: 1;
`;

const AnimatedHeading = styled(Typography)`
  display: block;
  font-size: 4rem;
  position: relative;
  color: white;
  animation: text_reveal 0.5s ease forwards;
`;

const HeroSection = ({ backgroundImage }) => {
    return (
      <HeroContainer backgroundImage={backgroundImage}>
        <Overlay />
        <HeroContent>
          <AnimatedHeading variant="h1">
            <span>Hello, </span>
            <span className="animated-span delayed-span-1"></span>
          </AnimatedHeading>
          <AnimatedHeading variant="h1">
            <span>My Name is </span>
            <span className="animated-span delayed-span-2"></span>
          </AnimatedHeading>
          <AnimatedHeading
            variant="h1"
            sx={{
              color: 'crimson',
              fontWeight: 'medium',
              animation: 'text_reveal_name .5s ease forwards',
              animationDelay: '3s',
            }}
          >
            <span>Aman </span>
            <span className="animated-span delayed-span-3"></span>
          </AnimatedHeading>
          <Button
                    variant="outlined"
                    color="primary"
                    href="#projects"
                    sx={{
                        mt: 2,
                        fontSize: '30px',
                        padding: '2px, 10px',
                        color: 'crimson',
                        borderColor: 'crimson',
                        '&:hover': {
                            backgroundColor: 'crimson',
                            color: 'white',
                        },
                    }}
                >
                    Portfolio
        </Button>
        </HeroContent>
      </HeroContainer>
    );
  };
  
  export default HeroSection;

