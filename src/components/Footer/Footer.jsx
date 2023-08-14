import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import { GitHub, LinkedIn, YouTube } from '@mui/icons-material';

const FooterContainer = styled(AppBar)`
  background-color: rgb(0 0 0 / 87%);
  color: #fdfdfd;
  position: sticky;
  bottom: 0;
  z-index: 1000;
`;

const CenteredBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#d8e2e5',
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>
        <Toolbar>
          <Box flexGrow={1}>
            <Typography variant="body1" style={{ fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} LIVWELL. All rights reserved.
            </Typography>
          </Box>
          <CenteredBox>
            <IconButton
              href="https://github.com/itsamanverma"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ffffff' }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/aman-verma-2a2888122/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ffffff' }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/user/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff' }}
            >
              <YouTube />
            </IconButton>
            <Typography variant="body2" style={{ display: 'inline', marginRight: '10px' }}>
              <a href="/terms">Terms of Service</a>
            </Typography>
            <Typography variant="body2" style={{ display: 'inline' }}>
              <a href="/privacy">Privacy Policy</a>
            </Typography>
          </CenteredBox>
        </Toolbar>
      </FooterContainer>
    </ThemeProvider>
  );
};

export default Footer;
