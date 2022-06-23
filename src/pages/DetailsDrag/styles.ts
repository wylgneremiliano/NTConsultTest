import { draculaTheme } from "@src/themes/dracula";
import { shade } from "polished";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import styled from "styled-components";
import SettingsBackupRestoreOutlinedIcon from "@mui/icons-material/SettingsBackupRestoreOutlined";

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

export const Content = styled.div`
  position: relative;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 20px;
  width: 45%;
  height: 60vh;
  text-align: center;
  h1 {
    font-size: 30px;
    color: #fff;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    color: #ccc;
  }
  img {
    filter: hue-rotate(300deg);
  }
  @media (max-width: 991px) {
    width: 90%;
    height: 50vh;
  }
  background-color: ${draculaTheme.background};
  border-radius: 8px;
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
export const NotEdit = styled(SettingsBackupRestoreOutlinedIcon)``;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 25px;
  filter: hue-rotate(180deg) contrast(80%);
`;

export const ActionButtonContainer = styled.div`
  position: absolute;
  display: flex;
  top: 20px;
  right: 75px;
  @media (max-width: 991px) {
    top: 15px;
    right: 40px;
  }
  width: 50px;
  height: 50px;
  z-index: 1;
`;

export const Edit = styled(EditIcon)``;

export const Remove = styled(ClearIcon)``;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-radius: 5px;
  padding: 0 10px;
  cursor: pointer;
  :nth-child(1) {
    background-color: ${draculaTheme.blue};
    :hover {
      background-color: ${shade(0.2, draculaTheme.blue)};
    }
  }
  :nth-child(2) {
    background-color: ${draculaTheme.red};
    :hover {
      background-color: ${shade(0.5, draculaTheme.red)};
    }
  }
  @media (max-width: 991px) {
    width: 30px;
    height: 30px;
  }
`;

export const Input = styled.input`
  width: 100%;
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
export const InputContainer = styled.div`
  width: 320px;
  @media (max-width: 1000px) {
    width: 280px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputContainerButton = styled.div`
  width: 320px;
  @media (max-width: 1000px) {
    width: 280px;
  }
  button {
    margin: 10px;
    :nth-child(1) {
      background-color: ${draculaTheme.blue};
      :hover {
        background-color: ${shade(0.2, draculaTheme.blue)};
      }
    }
    :nth-child(2) {
      background-color: ${draculaTheme.green};
      :hover {
        background-color: ${shade(0.5, draculaTheme.green)};
      }
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
