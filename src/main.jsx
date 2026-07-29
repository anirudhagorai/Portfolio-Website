/**
 * @copyright 2026 AnirudhaGorai
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/**
 * Components
 */
import App from "./App.jsx";

/**
 * CSS Links
 */
import "./index.css";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Portfolio-Website">
    <App />
  </BrowserRouter>
);
