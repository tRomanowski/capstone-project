import { Route, Routes, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import Favorites from './Pages/Favorites';
import GitHubRedirect from './Pages/GitHubRedirect';
import Header from './components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

export default function App() {
  const [token, setToken] = useState();
  const navigate = useNavigate();

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

  const loginWithGitHubCode = useCallback(
    async code => {
      const response = await fetch('/api/github-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setToken(data.token);
      navigate('/profile');
    },
    [navigate]
  );

  function handleLogout() {
    setToken();
    navigate('/login');
  }

  return (
    <>
      <Header token={token} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/login"
          x
          element={<Login onLogin={loginWithNameAndPassword} />}
        />
        <Route path="/profile" element={<Profile token={token} />} />
        <Route
          path="/oauth/redirect"
          element={<GitHubRedirect onLogin={loginWithGitHubCode} />}
        />
      </Routes>
    </>
  );
}
