import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FilterProvider } from "./Context/FilterContext/FilterProvider";
import { StateProvider } from "./Context/StateContext/StateProvider";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <StateProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </StateProvider>
    </Router>
  </StrictMode>
);
