import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";

import Navbar from "../layout/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
