import { BrowserRouter, Routes, Route } from "react-router-dom";


import PromotionPage from "./routers/ClientHome/PromotionPage";
import RegistrationPage from "./routers/ClientHome/RegistrationPage";
import Home from "./routers/ClientHome/Home";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="promotion" element={<PromotionPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
