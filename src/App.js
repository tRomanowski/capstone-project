import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { loadFromLocal, saveToLocal } from './utility/localStorage';
import { useCallback, useEffect, useState } from 'react';

import Favorites from './Pages/Favorites';
import GitHubRedirect from './Pages/GitHubRedirect';
import Header from './components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const [token, setToken] = useState(loadFromLocal('token') ?? '');
  const navigate = useNavigate();

  useEffect(() => {
    saveToLocal('token', token);
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
    if (data.code === 401) {
      console.error(data);
      alert('User and/or password incorrect!');
      return;
    }
    if (data.code === 404) {
      console.error(data);
      alert('User and/or password incorrect!');
      return;
    }
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
        <Route path="/" element={<Home token={token} />} />
        <Route path="/favorites" element={<Favorites token={token} />} />
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
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
