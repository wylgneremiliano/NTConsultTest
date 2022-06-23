import { draculaTheme } from "@src/themes/dracula";
import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${draculaTheme.background};
  width: 30%;
  border-radius: 8px;

  margin-top: 72px;
  padding: 50px;
  @media (max-width: 1000px) {
    width: 84%;
    margin-right: 7px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-top: 40px;
  z-index: 3;

  h2 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  p {
    font-weight: 300;
    font-size: 13px;
    line-height: 1.5em;
  }
`;
export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
  outline: 0;
  font-size: 0.8rem;

  color: #fff;
  margin: 5px 0;
  padding: 10px 0;
  background: transparent;
  transition: border-color 0.2s;
`;
export const InputContainer = styled.div`
  width: 350px;
  @media (max-width: 1000px) {
    width: 280px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  text-align: center;
  color: #fff;
  font-size: 3rem;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const InputContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  button {
    border: none;
    z-index: 3;
    border-radius: 20px;
    color: ${draculaTheme.foreground};
    width: 40%;
    background-color: ${draculaTheme.green};
    padding: 9px 5px;
    margin-top: 15px;
    cursor: pointer;
    @media (max-width: 1000px) {
      width: 100%;
    }
    :hover {
      background-color: ${shade(0.2, draculaTheme.green)};
    }
  }
`;
