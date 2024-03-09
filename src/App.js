// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Subscription from './components/Subscription';
import Login from './components/login';
import { AuthProvider } from './components/AuthContext';
import RoomPage from './components/room';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Login />
          } />
          <Route path="/dashboard" element={
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
