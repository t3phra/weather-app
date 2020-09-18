import styled from 'styled-components';

export const Card = styled.div`
  width: 240px;
  height: 380px;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 7px 7px 0px -3px rgba(124,158,178,1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
`;

export const DeleteCardBtn = styled.button`  
  width: 19px;
  height: 19px;
  color: #fff;
  background-color: #7c9eb2;
  border: none;
  border-radius: 10px;
  position: absolute; 
  top: 15px;
  right: 15px;
  
  &:hover {
    background-color: #87b1c9;
  }
  
  &:focus {
    outline: none;
  }
  
  &:active {
    background-color: #6a8594;
  }
`;

export const Temperature = styled.div`
  color: #412c63;
  font-size: 3rem;
  font-weight: bold;
`;

export const Location = styled.div`
  margin: 20px;
`;

export const City = styled.h3`
  margin: 0;
  color: #412c63;
`;

export const Country = styled.h4`
  margin: 0;
  color: #7c9eb2;
`;
