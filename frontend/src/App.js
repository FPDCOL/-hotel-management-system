import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {

return (
  <Router>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  </Router>
);
}

export default App;