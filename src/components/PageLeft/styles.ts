import styled from 'styled-components';

export const ContainerBottom = styled.div`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-flow: column;
  height: 60vh;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 15px;
  border-radius: 10px;
  button {
    flex: 10%;
    background-color: transparent;
    border: 0;
    color: white;
    cursor: pointer;
  }
`;
