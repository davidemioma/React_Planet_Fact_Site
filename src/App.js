import PlanetsPage from "./components/pages/PlanetsPage";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mercury" />} />

      <Route path="/:planetId" element={<PlanetsPage />} />
    </Routes>
  );
}

export default App;
