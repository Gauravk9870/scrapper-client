import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:company" element={<Company />} />
      </Routes>
    </>
  );
}

export default App;
