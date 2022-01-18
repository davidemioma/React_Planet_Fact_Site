import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PlanetContextProvider } from "./components/store/planet-context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <PlanetContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PlanetContextProvider>,
  document.getElementById("root")
);
