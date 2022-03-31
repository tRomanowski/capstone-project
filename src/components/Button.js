import styled from 'styled-components';

export default function Button({ text, remove, onRandomize }) {
  return (
    <StyledButton onClick={() => onRandomize()} remove={remove}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 10px;
  color: ${props => (props.remove ? 'white' : '#000')};
  background-color: ${props => (props.remove ? 'red' : '#caffad')};
  border-radius: 20px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 2rem;
  width: 240px;
  margin-top: 20px;
`;
