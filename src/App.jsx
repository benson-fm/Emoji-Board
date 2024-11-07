import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./pages/Example";
import Group0 from "./pages/Group0";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/Group0" element={<Group0 />} />
      </Routes>
    </BrowserRouter>
  )
}