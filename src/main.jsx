// 1. Import the extendTheme function
import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

// 3. Pass the `theme` prop to the `ChakraProvider`

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <Router> */}
      <App />
      {/* </Router> */}
    </ChakraProvider>
  </React.StrictMode>
);
