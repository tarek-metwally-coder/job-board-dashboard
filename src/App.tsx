import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import JobDetails from "./pages/JobDetails";
import AppLayout from './layouts/AppLayout';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Navigate to="/jobs" replace />} />

        <Route element={<AppLayout />}>
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetails />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
