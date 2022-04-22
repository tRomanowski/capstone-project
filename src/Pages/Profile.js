import { useEffect, useState } from 'react';

import styled from 'styled-components';

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

  const name = profile?.name ?? profile.githubName;

  return (
    <StyledCard>
      <h1>Profile</h1>
      <p>Hello {name}</p>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  position: relative;
  top: 65px;
  z-index: -1;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  background-color: var(--background-color);
  color: var(--text-light);
  padding: 10px;
  margin: 20px auto;
  display: grid;
  align-items: center;
  justify-items: center;
  height: 20vh;
  width: 80vw;

  p {
    color: var(--primary-color);
  }
`;
