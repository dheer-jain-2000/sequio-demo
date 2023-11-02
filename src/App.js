import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignInSignUp from './components/SignInSignUp';
import SurveyForm from './components/SurveyForm';

function App() {
  const pathname = window.location.pathname;

  return (
    <Router>
      {pathname === '/' && <SignInSignUp />}
      {pathname === '/survey' && <SurveyForm />}
    </Router>
  );
}

export default App;
