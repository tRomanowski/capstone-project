import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Favorites from './Pages/Favorites';
import Header from './components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

export default function App() {
  const [token, setToken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ token });
  }, [token]);

  async function loginWithNameAndPassword(credentials) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    setToken(data.token);
    navigate('/profile');
  }

  return (
    <>
      <Header token={token} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/login"
          x
          element={<Login onLogin={loginWithNameAndPassword} />}
        />
        <Route path="/profile" element={<Profile token={token} />} />
      </Routes>
    </>
  );
}
