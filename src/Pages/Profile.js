import { useEffect, useState } from 'react';

import MainWrapper from '../components/MainWrapper';

const inistialProfile = {
  _id: '',
  name: '',
};

export default function Profile({ token }) {
  const [profile, setProfile] = useState(inistialProfile);

  useEffect(() => {
    fetch('/api/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(setProfile);
  }, [token]);

  return (
    <MainWrapper>
      <h1>Profile</h1>
      <p>Hello {profile.name}</p>
    </MainWrapper>
  );
}
