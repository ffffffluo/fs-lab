import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
