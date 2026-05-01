import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import AppLayout from './layouts/AppLayout';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Navigate to='/jobs' replace />} />

        <Route path='/jobs' element={<AppLayout />}>
          <Route index element={<JobsPage />} />
          <Route path=':id' element={<JobsPage />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
