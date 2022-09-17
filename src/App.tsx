import Button from "./components/Button";
import { colors } from "../utils/colors";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestingPage from "./pages/TestingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
