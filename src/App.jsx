import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Menu from "./Menu";
import Contact from "./pages/ContactUs";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (  
    <ChakraProvider>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
