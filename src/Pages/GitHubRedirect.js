import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GitHubRedirect({ onLogin }) {
  const location = useLocation();

  const search = location.search;

  const query = new URLSearchParams(search);

  const code = query.get('code');

  useEffect(() => {
    if (!code) {
      return;
    }
    onLogin(code);
  }, [code, onLogin]);

  return <span>...loading</span>;
}
