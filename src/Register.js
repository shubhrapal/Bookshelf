import React, { useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import LoginForm from './LoginPage';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleRegistration = (user) => {
    setUsers([...users, user]);
  };

  const Log = () => {
    alert('you logged in')
  };

  const handleLogin = (credentials) => {
    const foundUser = users.find(user => user.username === credentials.username && user.password === credentials.password);
    if (foundUser) {
      setLoggedInUser(foundUser);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='login-form-container'>
       
      {!loggedInUser ? (
        <>
          <RegistrationForm onRegistration={handleRegistration} />
          <  Log  onLogin ={handleLogin} />
        </>
      ) : (
        window.location.assign('./card')
      )}
    </div>
  );
};



const RegistrationForm = ({ onRegistration }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistration({ username, password });
  };

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Sign-Up</h2>
      <input type="text" placeholder="email" value={username} onChange={(e) => setUsername(e.target.value)}  className='username'/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  className='pass'/>
      <button type="submit" className='signn'>signup</button>
    </form>
    </div>
    </>
  );
};

export default App;