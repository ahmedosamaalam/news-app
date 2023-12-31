import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(<App />);
