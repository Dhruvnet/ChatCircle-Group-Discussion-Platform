import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subscription from './components/Subscription';
import Login from './components/login';
import { AuthProvider } from './components/AuthContext';
import RoomPage from './components/room';
import Notes from './components/notes/notes';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Login />
          } />
          <Route path="/dashboard" element={
              <Subscription />          
          }
           />
           <Route path="/notes" element={
              <Notes />          
          }
           />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
