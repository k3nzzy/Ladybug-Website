import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catch from "./pages/Catch/Catch";
import Projects from "./pages/Projects/Projects";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Leadership from "./pages/Leadership/Leadership";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";

function App() {
  return (
    <div class="App">
      <Layout>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/*" element={<Catch/>} />
              <Route path="/Projects" element={<Projects/>} />
              <Route path="/Leadership" element={<Leadership />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </BrowserRouter> 
      </Layout>
    </div>
  );
}

export default App;