import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
