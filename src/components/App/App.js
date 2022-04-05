import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/HomePage/index.js";
import LoginPage from "../../pages/LoginPage/index";
import BatteryProgram from "../../pages/BatteryProgram/index";
import ApplicationIdTracker from "../../pages/ApplicationIdTracker/index";
import SubmitNewApplication from "../../pages/SubmitNewApplication/index";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <LoginPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/iic-dashboard"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/aps-application-tracker/:id/:name"
          element={
            <PrivateRoute>
              <BatteryProgram />
            </PrivateRoute>
          }
        />
        <Route
          path="/bb-rejected-application-1/:id"
          element={
            <PrivateRoute>
              <ApplicationIdTracker />
            </PrivateRoute>
          }
        />
        <Route
          path="/aps-submit-new-application-1"
          element={
            <PrivateRoute>
              <SubmitNewApplication />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
