import './Home.css';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const history = useHistory();
  
  async function register () {
    try {
      if (password !== confirmedPassword) {
        alert('Confirmed password did not match!!!');
        return;
      }

      const response = await axios.post('http://localhost:3000/api/auth/register', {
        email: email,
        password: password
      });

      if (response.status === 200) {
        // redirect to login
        history.push('/login');
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
          <input value={confirmedPassword} type='password' onChange={(e) => setConfirmedPassword(e.target.value)}
            placeholder="Confirm your password"></input>
          <button onClick={register}>Register</button>
        </div>
      </header>
    </div>
  );
}

export default Register;
