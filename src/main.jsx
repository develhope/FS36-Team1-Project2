import ReactModal from "react-modal";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./components/App.jsx";

ReactModal.setAppElement("#root");
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

