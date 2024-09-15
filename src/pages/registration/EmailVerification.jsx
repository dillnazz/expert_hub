import React, { useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase'; // Firebase configuration
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleResendVerification = async () => {
    setError('');
    setMessage('');

    try {
      const user = auth.currentUser;

      if (user && !user.emailVerified) {
        await sendEmailVerification(user);
        setMessage('Verification email resent! Please check your inbox.');
      } else {
        setError('User is either not logged in or already verified.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCheckVerification = async () => {
    try {
      const user = auth.currentUser;
      await user.reload(); // Reload user to update verification status

      if (user.emailVerified) {
        setMessage('Your email is verified!');
        navigate('/login'); // Redirect to home after successful verification
      } else {
        setError('Your email is not verified yet.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='registration'>
      <h2>Email Verification</h2>
      <p>Please check your email for the verification link.</p>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleResendVerification}>Resend Verification Email</button>
      <button onClick={handleCheckVerification}>Check Verification Status</button>
    </div>
  );
};

export default EmailVerification;
