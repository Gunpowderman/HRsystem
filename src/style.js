import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: #242424;
    background-color: #fefafb
  }
`;

export const Container = styled.div`
  background-color: salmon;
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-around;
  position: fixed;
`;

export const NavBarText = styled.p`
  position: absolute;
  top: 20px;
`;

export const CardContainer = styled.div`
  background-color: red;
  position: absolute;
  width: 1500px;
  height: 600px;
  top: 200px;
`;

export const Name = styled.p`
  text-align: center;
  color: black;
`;

export const ModalWrapper = styled.div`
  background-color: green;

  height: 200px;
  width: 200px;

  display: flex;
  justify-content: center;
  justify-items: center;
`;
