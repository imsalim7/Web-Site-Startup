import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Services1 from "../pages/Services1";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Getstarted from "../components/Getstarted";

import Register from "../components/Register";
import Login from "../components/Login";

function App() {
  return (
    <HashRouter>
      <Layout>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services1" element={<Services1 />} />
          <Route path="getstarted" element={<Getstarted />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;