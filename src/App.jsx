import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import FormPage from './component/FormPage'
import ForgotPassword from './ForgotPassword'
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<LoginPage/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/formpage" element={<FormPage/>} />

    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
