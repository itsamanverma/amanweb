// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import routes from './routes';
import HomePage from './components/HomePage/HomePage';
import HeroSection from './components/HeroSection/HeroSection';
import amanImage from './assets/aman1.jpg';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HeroSection backgroundImage={amanImage} />} />
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </Router>
    );
};

export default App;
