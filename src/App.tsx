import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PotentialCandidatesPage from "./pages/PotentialCandidatesPage";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/potential-candidates" element={<PotentialCandidatesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
