import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  overflow: hidden;
  width: 80vw;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  border-radius: 10px;
`;
export const ContainerPagination = styled.div`
  display: flex;
  flex-flow: row nowrap;
  button {
    flex-basis: 10%;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: white;
  }
`;
