// AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// 페이지 컴포넌트 import
import Home from "./pages/Home/Home";
import CI from "./pages/About/CI";
import AboutCompany from "./pages/About/AboutCompany";
import FCProducts from "./pages/Business/FCProducts";
import CustomerSupport from "./pages/CustomerService/CustomerSupport";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/ci" element={<CI />} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/business/fc-products" element={<FCProducts />} />
        <Route path="/customer-service/support" element={<CustomerSupport />} />
    </Routes>
  );
};

export default AppRoutes;
