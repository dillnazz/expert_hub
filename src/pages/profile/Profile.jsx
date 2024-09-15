import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Home from '../home/Home';
// import Home from '../home/Home';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login'); // Redirect to login page after logout
    });

  };

  return (
    <div>
    <div className="">
      {user ? (
        <div>
          <h2>Profile</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>UID:</strong> {user.uid}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      <Home/>
    </div>
  );
};

export default Profile;
