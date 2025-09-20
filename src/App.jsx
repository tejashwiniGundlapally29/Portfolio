import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Project1Detail } from "./pages/Project1Detail";
import { Project2Detail } from "./pages/Project2Detail"; // ✅ add this import

function App() {
  return (
    <>
      <Toaster />
      <ThemeToggle /> {/* Dark/light mode toggle */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/project/1" element={<Project1Detail />} />
          <Route path="/project2" element={<Project2Detail />} /> {/* ✅ works now */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
