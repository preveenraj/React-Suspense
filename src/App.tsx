import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

const Sample = lazy(() => import('./Sample'));

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/sample" element={<Sample/>}/>
        </Routes>
        </Suspense>
     </Router>
    </div>
  );
}

export default App;
