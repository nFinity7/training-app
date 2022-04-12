import React from 'react';
import { Route, Routes } from "react-router-dom";

import { LoginPageComponent as LoginPage } from './components/Login/LoginPage'
import { DashboardComponent as Dashboard } from './components/Dashboard/Dashboard'
import { ResetPasswordComponent as ResetPassword } from './components/ResetPassword/ResetPassword'
import { RegisterComponent as Register} from './components/Register/Register'

import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={< LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  );
}

export default App;
