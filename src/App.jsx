import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Menu from "./Menu";
import { ChakraProvider } from "@chakra-ui/react";
import { Suspense } from "react";

function App() {
  return (  
    
    <ChakraProvider>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" 
        element={
          <Suspense fallback="... loading">
            <AboutUs />
          </Suspense>
        }
        />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
        
  );
}

export default App;