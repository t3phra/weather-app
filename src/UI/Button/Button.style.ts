import styled from 'styled-components';

interface BtnProps {
  btnType: string;
}

export const Btn = styled.button<BtnProps>`
  width: 80px;
  height: 40px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  margin-right: 15px;
  background-color: ${(props) => (props.btnType === 'submit' ? '#7c9eb2' : '#412c63')};
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    background-color: ${(props) => (props.btnType === 'submit' ? '#87b1c9' : '#614391')};
  }  
  
  &:active {
    background-color: ${(props) => (props.btnType === 'submit' ? '#6a8594' : '#210E40')};
  }
`;
