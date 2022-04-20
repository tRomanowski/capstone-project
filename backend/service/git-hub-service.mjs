import fetch from 'node-fetch';

const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;

if (!client_id) {
  throw new Error('REACT_APP_GITHUB_CLIENT_ID not set');
}

const client_secret = process.env.GITHUB_CLIENT_SECRET;

if (!client_secret) {
  throw new Error('GITHUB_CLIENT_SECRET not set');
}

export async function getGitHubAccessToken(code) {
  const githubResponse = await fetch(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    }
  );

  if (!githubResponse) {
    return 'Token missing';
  }
  const githubResponseJson = await githubResponse.json();
  return githubResponseJson.access_token;
}

export async function getGitHubName(token) {
  const githubResponse = await fetch('https://api.github.com/user', {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await githubResponse.json();

  return data.login;
}
