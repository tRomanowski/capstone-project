import Button from '../components/Button';
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
        <Button>Login</Button>
      </Form>
      <a href={githubLoginUrl}>Login with Github</a>
    </MainWrapper>
  );
}

const Form = styled.form`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #65a603;
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
  align-items: center;
  margin: 10px 0;

  label {
    text-align: start;
  }
  input {
    border-radius: 20px;
    width: 100%;
    height: 40px;
    padding: 3px 7px;
    font-size: 17px;
    border: none;
  }
`;
