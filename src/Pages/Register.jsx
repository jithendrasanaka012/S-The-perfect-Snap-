import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !password) {
      setErrorMessage('Both username and password are required.');
      return;
    }

    window.sessionStorage.setItem('name', name);
    window.sessionStorage.setItem('password', password);
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Register to S</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <input type="submit" value="Register" className="submit-button" />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default RegistrationForm;
