import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import './SignInSignUp.css'; // Import your CSS stylesheet

// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');

function SignInSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To display error messages
  const [sampleUsers, setSampleUsers] = useState([
    { email: "Dheer000", password: "xyz" }
  ]);


  const handleSignIn = () => {
    console.log('DEBUGGING: ', email,' ', password);
    console.log('Array list: ', sampleUsers);
    // Check if the email and password match any user in the sample array
    const user = sampleUsers.find((user) => user.email === email && user.password === password);
    console.log('Search result: ', user);
    if (user) {
      console.log(window.location);
      window.location.pathname = '/survey';
    } else {
      // Display an error message if the sign-in is unsuccessful
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  const handleSignUp = () => {
    // Add a new user to the sample array (for demonstration purposes)
    const user = sampleUsers.find((user) => user.email === email && user.password === password);
    if (user) {
        setErrorMessage('The given user already exists.');
    } else {
        setSampleUsers([...sampleUsers,{email,password}]);
        // Clear the input fields
        setEmail('');
        setPassword('');
    }
  };

  return (
    <div className="sign-in-sign-up-container">
      <h1>Log in Page</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="input-container">
        <input
          type="email"
          placeholder="User Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '300px', padding: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '300px', padding: '10px' }}
        />
      </div>
      <div className="button-container">
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignInSignUp;
