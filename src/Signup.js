import React, { useState } from 'react';
import Card from './Card';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleRegistration = (user) => {
    setUsers([...users, user]);
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
    <div>
      {!loggedInUser ? (
        <>
          <RegistrationForm onRegistration={handleRegistration} />
          <LoginForm onLogin={handleLogin} />
        </>
      ) : (
        <Card/>
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
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default App;
