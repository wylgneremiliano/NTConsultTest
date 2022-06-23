import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import { draculaTheme } from "@src/themes/dracula";

export const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  background-color: ${draculaTheme.background};
  @media only screen and (max-width: 991px) {
    padding: 20px 50px;
  }

  @media (max-width: 991px) {
    ul li a {
      color: ${draculaTheme.foreground};
    }
    ul li {
      color: ${draculaTheme.foreground};
      font-size: 26px;
      margin: 20px;
    }
  }

  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;
  transition: 0.3s;
`;
export const Logo = styled.a`
  cursor: pointer;
  color: ${draculaTheme.foreground};
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.5s;
`;

export const Column = styled.div`
  list-style: none;
  position: relative;
  display: flex;
  height: 100%;

  padding: 10px;
  div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: #fff;
    p {
      margin-left: 5px;
    }
  }
  @media (max-width: 991px) {
    position: fixed;
    top: 72px;
    left: ${(props) => (props.about === "3dot" ? "-100%" : 0)};
    display: block;
    padding: 100px 50px;
    text-align: center;
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -150%);
    }
    width: 100%;
    height: 100vh;
    background: ${draculaTheme.background};
    transition: 0.5s;
    z-index: 999;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const Toggle = styled(MenuIcon)`
  opacity: 0;
  @media (max-width: 991px) {
    width: 40px;
    height: 40px;
    opacity: 1;
    color: ${draculaTheme.foreground};
    background-size: 30px;
    cursor: pointer;
  }
`;
export const CloseButton = styled(CloseIcon)`
  opacity: 0;
  @media (max-width: 991px) {
    width: 40px;
    height: 40px;
    opacity: 1;
    color: ${draculaTheme.foreground};
    background-size: 30px;
    cursor: pointer;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${draculaTheme.background};
  padding: 40px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  width: 400;
  h2 {
    color: ${draculaTheme.text};
    text-align: center;
    margin-bottom: 15px;
  }
  p {
    color: ${draculaTheme.text};
  }
`;

export const Logout = styled(LogoutIcon)`
  color: #fff;
  cursor: pointer;
`;
