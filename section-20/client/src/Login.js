import './Home.css';
import { useState } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';
import { useHistory } from "react-router-dom";
import { initConnection } from './socket';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function login() {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email: email,
        password: password
      });

      if (response.status === 200 && response.data && response.data.token) {
        Cookie.set('token', response.data.token);
        initConnection();
        // redirect to home
        history.push('/');
      }

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="login-container">
          <input value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"></input>
          <input value={password} type='password' onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"></input>
          <button onClick={login}>Login</button>
        </div>
      </header>
    </div>
  );
}

export default Login;
