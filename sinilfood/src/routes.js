// AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// 페이지 컴포넌트 import
import Home from "./pages/Home/Home";
import CI from "./pages/About/CI";
import AboutCompany from "./pages/About/AboutCompany";
import AboutLayout from "./components/about/AboutLayout";
import FCProducts from "./pages/Business/FCProducts";
import CustomerSupport from "./pages/CustomerService/CustomerSupport";
import BaseLayout from "./components/BaseLayout";
import Organization from "./pages/About/Organization";
import Location from "./pages/About/Location";
import History from "./pages/About/History";
import Certifications from "./pages/About/Certifications";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutLayout />}>
          <Route index element={<AboutCompany />} />
          <Route path="ci" element={<CI />} />
          <Route path="approvals" element={<Certifications />} />
          <Route path="path" element={<Location />} />
          <Route path="history" element={<History />} />
          <Route path="organization" element={<Organization />} />
        </Route>
        <Route path="/business/fc-products" element={<FCProducts />} />
        <Route path="/customer-service/support" element={<CustomerSupport />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
