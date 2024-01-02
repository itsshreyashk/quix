import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Display from './pages/display';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/you' Component={Display}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
