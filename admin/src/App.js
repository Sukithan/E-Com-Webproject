import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import Home from './components/Home'; // Import your Home component
import QuarterlySalesReport from './components/QuarterlySalesReport'; // Import your QuarterlySalesReport component
import CustomerOrderReport from './components/CustomerOrderReport'; // Import your QuarterlySalesReport component
import TopSellingproduct from './components/TopSellingproduct'; // Import your QuarterlySalesReport component
import ProductCategoryWithMostOrders from './components/ProductCategoryWithMostOrders'; // Import your QuarterlySalesReport component
import ProductInterestTimePeriod from './components/ProductInterestTimePeriod'; // Import your QuarterlySalesReport component

import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // This function sets the logged-in state to true when the user logs in successfully
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* Redirect from the root URL to the AdminLogin page */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Admin Login Route */}
        <Route path="/login" element={<AdminLogin onLogin={handleLogin} />} />

        {/* Home Route - protected by login state */}
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        
        {/* Add report routes here */}
        <Route path="/quarterly-sales-report" element={isLoggedIn ? <QuarterlySalesReport /> : <Navigate to="/login" />} />

        {/* Add more routes for other report pages as needed */}
        <Route path="/customer-order-report" element={isLoggedIn ? <CustomerOrderReport /> : <Navigate to="/login" />} />
        <Route path="/top-selling-products" element={isLoggedIn ? <TopSellingproduct /> : <Navigate to="/login" />} />
        <Route path="/product-category-orders" element={isLoggedIn ? <ProductCategoryWithMostOrders /> : <Navigate to="/login" />} />
        <Route path="/product-interest-trend" element={isLoggedIn ? <ProductInterestTimePeriod /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
