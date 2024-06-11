import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Company />} />
      </Routes>
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
