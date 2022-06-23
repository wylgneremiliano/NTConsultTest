import styled from "styled-components";
import { draculaTheme } from "@src/themes/dracula";
import { shade } from "polished";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${draculaTheme.background};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1000px) {
    justify-content: center;
    padding: 10px 0;
    height: 70vh;
  }
  width: 80vw;
  height: 80vh;
  border-radius: 8px;
  padding: 15px;
  background-color: ${draculaTheme.backgroundSecondary};
  button {
    border: none;

    border-radius: 20px;
    color: ${draculaTheme.foreground};
    width: 100px;
    background-color: ${draculaTheme.blue};
    padding: 9px 5px;
    margin-top: 15px;
    cursor: pointer;
    @media (max-width: 1000px) {
      width: 100%;
    }
    :hover {
      background-color: ${shade(0.2, draculaTheme.blue)};
    }
  }
`;
export const ManGif = styled.img`
  width: 400px;
  @media (max-width: 1000px) {
    width: 0;
  }
`;
export const Logo = styled.img`
  width: 150px;
  margin-bottom: 25px;
  filter: hue-rotate(180deg) contrast(80%);
`;

export const BoxForm = styled.div`
  width: 30%;
  @media (max-width: 1000px) {
    width: 80%;
    align-items: center;
  }
  display: flex;
  justify-content: center;

  flex-direction: column;
  padding: 10px;
  color: #fff;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
`;
export const Input = styled.input`
  width: 100%;
  margin: 5px;
  border: 0;
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
  outline: 0;
  font-size: 1.1rem;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
  color: #fff;
  margin: 5px 0;
  padding: 10px 0;
  background: transparent;
  transition: border-color 0.2s;
`;

export const SpanError = styled.span`
  text-align: center;
  font-weight: 300;
  color: ${draculaTheme.red};
  font-size: 11px;
`;
