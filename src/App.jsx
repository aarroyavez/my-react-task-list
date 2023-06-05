import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Menu from "./Menu";

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
