// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Navbar from './components/Navbar/Navbar';
import routes from './routes';
import ImageSlider from './components/ImageSlider/ImageSlider';

const App = () => {
    return (
        <Router>
            <Navbar />
            <ImageSlider />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </Router>
    );
};

export default App;
