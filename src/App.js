import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Profile from './Components/Profile';

import Navbar from './Components/Navbar';
import Taskm from './Components/Taskm';



function App() {
 return (
   <Router>
     <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Profile />} />
    <Route path="/task" element={<Taskm />} />
    </Routes>
   </Router>
 );
}
export default App;