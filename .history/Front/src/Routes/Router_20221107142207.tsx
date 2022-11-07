import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/home";


export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
     </Routes>
  );
}