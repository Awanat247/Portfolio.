import React from "react";
import {hydrateRoot} from "react-dom/client";
import Portfolio from "./Portfolio";
import "./styles.css";
hydrateRoot(document.getElementById("root")!, <React.StrictMode><Portfolio /></React.StrictMode>);
