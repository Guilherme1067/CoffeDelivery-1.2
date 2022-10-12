import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CheckOut } from "./pages/Checkout";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Sucess } from "./pages/Success";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element= {<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="success" element={<Sucess/>}/>
      </Route>
    </Routes>
  );
};
