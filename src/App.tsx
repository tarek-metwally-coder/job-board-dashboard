import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import JobDetails from "./pages/JobDetails";

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
