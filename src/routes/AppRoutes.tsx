import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "../components/LandingPage/LandingPage";
import Login from "../components/LoginSection/LoginSection";
import Items from "../components/LoginUserPages/ItemsSection/ItemsSection";
import ItemDetail from "../components/LoginUserPages/ItemDetailSection/ItemDetailSection";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/items" element={<Items />} />
      <Route path="/items/:itemId" element={<ItemDetail />} />{" "}
      {/* 商品詳細ページへのルート */}
    </Routes>
  );
};

export default AppRoutes;
