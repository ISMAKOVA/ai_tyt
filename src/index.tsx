import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App"
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
debugger
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
