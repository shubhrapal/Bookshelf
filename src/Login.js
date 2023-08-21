import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    // Login logic here
    // Send data to the server or perform any other necessary actions
    console.log('Login successful!');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const validateForm = () => {
    if (email.trim() === '') {
      return 'Email is required';
    }

    if (password.trim() === '') {
      return 'Password is required';
    }
    else window.location.assign('./card')
   
  };

  return (
    <div className='container-lg'>
      <div className="login-form-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={error ? 'error' : ''}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={error ? 'error' : ''}
            />
          </div>
          <button type="submit" >Login</button>
          <p className='or'>OR</p>
          <div className='su'>
            <Link to='/registration'><div className='signn'>Don't have account? SignUp here</div></Link></div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
 