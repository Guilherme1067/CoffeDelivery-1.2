import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CheckOut } from "./pages/Checkout";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element= {<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};