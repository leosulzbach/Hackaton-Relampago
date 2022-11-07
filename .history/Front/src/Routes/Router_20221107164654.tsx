import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/home";
import { Tipos } from "../Pages/tipos";


export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/tipos" element={<Tipos />} />
     </Routes>
  );
}