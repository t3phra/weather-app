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
  width: 400px;
  height: 380px;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translateY(-50%);
  top: 50vh;
`;
