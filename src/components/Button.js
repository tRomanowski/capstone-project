import {
  FaRandom,
  FaRegArrowAltCircleUp,
  FaRegSave,
  FaRegTimesCircle,
} from 'react-icons/fa';

import styled from 'styled-components';

export default function Button({ remove, onClick, children, form }) {
  return (
    <StyledButton onClick={onClick} remove={remove} form={form}>
      <div>
        {remove && <FaRegTimesCircle style={{ fontSize: '1em' }} />}
        {children === 'save' && <FaRegSave />}
        {children === 'login' && <FaRegArrowAltCircleUp />}
        {children === 'randomize' && <FaRandom />}
        {children}
      </div>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 0.3em 0.65em;
  text-transform: uppercase;
  color: ${props => (props.remove ? '#DFE2F2' : '#DFE2F2')};
  background-color: ${props => (props.remove ? '#F21D6A' : '#65A603')};
  border: none;
  outline: none;
  box-shadow: 0 3px 6px var(--shadow-color);
  cursor: pointer;
  font-size: 1.1em;
  letter-spacing: 1px;
  border-radius: 5px;

  div {
    display: flex;
    align-items: center;
    gap: 0.6em;
  }
`;
