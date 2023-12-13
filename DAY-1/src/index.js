import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './Landing';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/app" element={<App />} />
        <Route path="/sign" element={<SignUpForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
