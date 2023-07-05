import { Routes, Route } from "react-router-dom";
import AboutPage from "../components/About";
import ContactPage from "../components/Contact";
import DashboardPage from "../components/Dashboard";
import ProjectPage from "../components/Project";




function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/contato" element={<ContactPage />} />  
      <Route path="/contato" element={<ProjectPage />} />   
       
    </Routes>
  );
}

export default RoutePages;