import { Navbar } from "./Components/Header/Navbar";
import { CareersPage } from "./Pages/CareersPage";
import { Routes, Route } from "react-router-dom";
import { SavedJobs } from "./Pages/SavedJobs";
import { AppliedJobs } from "./Pages/AppliedJobs";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<CareersPage />} />
        <Route path="/savedjobs" element={<SavedJobs />} />
        <Route path="/appliedjobs" element={<AppliedJobs />} />
      </Routes>
    </div>
  );
}
