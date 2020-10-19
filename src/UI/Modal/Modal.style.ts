import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWindow = styled.div`
  background-color: white;
  width: 380px;
  min-height: 150px;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 10px;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translateY(-50%);
  top: 50vh;
  color: #412c63;
  font-size: 1.1rem;
  
  @media (max-width: 800px) {
    width: 100vw;
    border-radius: 0;
  }
`;
