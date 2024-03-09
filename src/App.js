// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Subscription from './components/Subscription';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './components/AuthContext';
import ProfileScreen from './components/Profilescreen';
import RoomPage from './components/room';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={
            <Login />
          } />
          <Route path="/dashboard" element={
            <Dashboard />
          } />
          <Route path="/Profile" element={
            <ProfileScreen />
          } />
          <Route path="/" element={
            <>
              <Navbar />
              <Subscription />
            </>
          
          }
           />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
