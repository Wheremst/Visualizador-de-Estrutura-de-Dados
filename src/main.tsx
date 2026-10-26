import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Pega a <div id="root"> do index.html e manda o React renderizar o App dentro dela.
// O "!" diz ao TypeScript: "tenho certeza que esse elemento existe".
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
