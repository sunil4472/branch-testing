import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./Styles/App.css";
import AboutPage from "./Pages/about";
import Home from "./Pages/home";
import ContactPage from "./Pages/contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
