import Button from '../components/Button';
import { FaGithub } from 'react-icons/fa';
import MainWrapper from '../components/MainWrapper';
import styled from 'styled-components';
import { useState } from 'react';

const clientID = process.env.REACT_APP_GITHUB_CLIENT_ID;

const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}`;

const initialCredentials = {
  name: '',
  password: '',
};

export default function Login({ onLogin }) {
  const [credentials, setCredentials] = useState(initialCredentials);

  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(credentials);
  }

  return (
    <MainWrapper>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            name="name"
            value={credentials.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="userPassword">Password:</label>
          <input
            type="password"
            id="userPassword"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </FormControl>
        <Button>login</Button>
      </Form>
      <StyledAnchor href={githubLoginUrl}>
        Login with Github
        <FaGithub />
      </StyledAnchor>
    </MainWrapper>
  );
}

const Form = styled.form`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;

  label {
    text-align: start;
    color: var(--text-light);
  }
  input {
    border-radius: 3px;
    width: 100%;
    height: 40px;
    padding: 3px 7px;
    font-size: 17px;
    border: 2px solid var(--primary-color);
  }
`;

const StyledAnchor = styled.a`
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-decoration: none;
  background-color: grey;
  padding: 10px 40px;
  border-radius: 3px;
  color: var(--text-color);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
