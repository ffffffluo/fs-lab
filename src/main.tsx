import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Make sure this points to your Tailwind CSS file
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
