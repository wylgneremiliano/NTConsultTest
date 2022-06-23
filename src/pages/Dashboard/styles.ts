import { draculaTheme } from "@src/themes/dracula";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${draculaTheme.currentLine};
  width: 100%;
  height: calc(100vh - 4.5rem);
  margin-top: 72px;
  padding-bottom: 72px;
`;

export const Box = styled.div`
  display: flex;
  padding-bottom: 72px;
`;

export const Header = styled.div``;
