import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase'; // Firebase setup
import { useNavigate } from 'react-router-dom';
import './registration.css';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      setMessage('Verification email sent! Please check your inbox.');

      // Redirect to the verification page
      navigate('/home')
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='registration'>
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <div className='registration'>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='registration'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='registration'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            className='input-Pass'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;

