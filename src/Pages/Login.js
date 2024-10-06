import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const storedName = window.sessionStorage.getItem('name');
    const storedPassword = window.sessionStorage.getItem('password');
    if (username === storedName && password === storedPassword) {
      navigate('/S');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div id='d1'>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input id='di1'
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </td>
            </tr>
            <tr>
              <td>
                <input id='di2'
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </td>
            </tr>
            <tr>
              <td>
                <input id='d13' type="submit" value="Login" />
              </td>
            </tr>
            <tr>
              <td>
                New user? <Link to="/register">Register here</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Login;