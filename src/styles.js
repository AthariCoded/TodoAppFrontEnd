import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  
}
`;

export const Wrapper = styled.div`
  display: block;
  flex-wrap: wrap;
  width: 50%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
`;
