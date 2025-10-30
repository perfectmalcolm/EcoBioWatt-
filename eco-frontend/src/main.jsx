import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthWrapper from "./components/AuthWrapper.jsx";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import Layout from "./pages/Layout.jsx";
import Logistics from "./pages/Logistics.jsx";
import Login from "./pages/Login.jsx";
import Reports from "./pages/Reports.jsx";
import Signup from "./pages/Signup.jsx";
import Support from "./pages/Support.jsx";
import UserInput from "./pages/UserInput.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<AuthWrapper />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
                      <Route path="logistics" element={<Logistics />} />
                      <Route path="reports" element={<Reports />} />
                                <Route path="support" element={<Support />} />
                                <Route path="user-input" element={<UserInput />} />
                                <Route path="admin" element={<AdminDashboard />} />
                              </Route>        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
