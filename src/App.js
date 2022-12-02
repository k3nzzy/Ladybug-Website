import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catch from "./pages/Catch";

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/*" element={<Catch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;