import styled from 'styled-components';

export default function Button({ text, remove, onClick }) {
  return (
    <StyledButton onClick={onClick} remove={remove}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 10px;
  color: ${props => (props.remove ? '#DFE2F2' : '#000')};
  background-color: ${props => (props.remove ? 'red' : '#D9B504')};
  border-radius: 20px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  font-size: 1.5rem;
`;
