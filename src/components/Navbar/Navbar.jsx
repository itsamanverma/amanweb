import React from 'react';
import AmanIcon from '../AmanIcon/AmanIcon'; // Adjust the import path accordingly
import { AppBar, Toolbar, Button, Box, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useLocation } from 'react-router-dom'; // Use NavLink for active route styling
import routes from '../../routes'; // Adjust the import path accordingly
import ScrollingQuote from '../ScrollingQuote/ScrollingQuote';

const NavbarContainer = styled(AppBar)`
    background-color: #222;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const theme = createTheme({
    palette: {
        primary: {
            main: '#d8e2e5',
        },
    },
});

const Navbar = () => {
    const location = useLocation();

    return (
        <ThemeProvider theme={theme}>
            <NavbarContainer>
                <Toolbar>
                    <Box display="flex" alignItems="center">
                        <AmanIcon />
                    </Box>
                    <ScrollingQuote />
                    <Box ml="auto">
                        {routes.map((route, index) => (
                            <Button
                                key={index}
                                component={NavLink} // Use NavLink instead of Link
                                to={route.path}
                                style={location.pathname === route.path ? activeStyle : {}}
                                exact={route.path === '/' ? 'true' : 'false'} // Convert boolean to string
                            >
                                {route.path === '/' ? 'HOME' : route.path.slice(1).toUpperCase()}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </NavbarContainer>
        </ThemeProvider>
    );
};

const activeStyle = {
    color: '#ff5733', // Color for active route
    transition: 'color 0.3s ease', // Transition effect for color change
};

export default Navbar;
