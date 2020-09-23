import styled from 'styled-components';

export const Content = styled.div`
  text-align: center;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  background-color: #e7ebef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Date = styled.h3`
  margin-top: 50px;
  color: #7c9eb2;
  font-size: 1.5rem;
`;

export const Title = styled.h2`
  margin: 0 0 50px;
  color: #412c63;
  font-size: 2.5rem;
`;

export const InputContainer = styled.div``;

export const Input = styled.input`
  width: 250px;
  height: 35px;
  margin-bottom: 50px;
  padding: 0 15px;
  color: #412c63;
  font-size: 1rem;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  
  &:focus {
    outline: none;
  }
`;

export const AddBtn = styled.button`
  width: 40px;
  height: 35px;
  background-color: #7c9eb2;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  
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

export const CardsContainer = styled.div`
  max-width: 70vw;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
