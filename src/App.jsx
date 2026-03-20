import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardLayout from './pages/DashboardLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="students" element={<h1>Students</h1>} />
          <Route path="teachers" element={<h1>Teachers</h1>} />
          <Route path="classes" element={<h1>Classes</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App