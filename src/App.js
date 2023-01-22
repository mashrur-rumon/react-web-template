import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Dashboard from "./components/Dashboard";
import Campaign from "./components/Campaign";
import Hypeasocial from "./components/Hypesocial";
import Insights from "./components/Insights";
import ThemeContext from "./contexts/ThemeContext";
import { useContext } from "react";

export default function App() {
  const context = useContext(ThemeContext);
  localStorage.setItem("theme", context.theme);
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/campaign" element={<Campaign/>}/>
      <Route path="/hypesocial" element={<Hypeasocial/>}/>
      <Route path="/insights" element={<Insights/>}/>
    </Routes>
    </BrowserRouter>
  );
}
