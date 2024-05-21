import { HashRouter, Routes,  Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Services1 from "../pages/Services1";
import NotFound from "../pages/NotFound";
import Getstarted from "../pages/Getstarted";
import Register from "../components/Register";
import Login from "../components/Login";
import Contact from "../pages/Contact";
import Dropdown from "../pages/Dropdown";
import Editpro from "../pages/Editpro";
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
          <Route path="contact" element={<Contact />} />
          <Route path="dropdown" element={<Dropdown />} />
          <Route path="editpro" element={<Editpro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
