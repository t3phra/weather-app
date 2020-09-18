import styled from 'styled-components';

export const Btn = styled.button`
  width: 80px;
  height: 40px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  margin-right: 15px;
  
  &.submit {
    background-color: #7c9eb2;
    
    &:hover {
      background-color: #87b1c9;
    }
  
    &:focus {
      outline: none;
    }
  
    &:active {
      background-color: #6a8594;
    }
  }
  
  &.decline {
    background-color: #412c63;
    
    &:hover {
      background-color: #614391;
    }
  
    &:focus {
      outline: none;
    }
  
    &:active {
      background-color: #210E40;
    }
  }
`;
