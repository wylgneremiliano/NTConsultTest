import { draculaTheme } from "@src/themes/dracula";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { shade } from "polished";

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
  @media (max-width: 991px) {
    padding: 20px;
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 20;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #ccc 14%, #ccc 67%);
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(13deg, #808080 14%, #808080 64%);
  }
  ::-webkit-scrollbar-track {
    background: ${draculaTheme.currentLine};
    box-shadow: inset 7px 10px 12px ${draculaTheme.comment};
  }
  scrollbar-color: #ccc ${draculaTheme.currentLine};
  scrollbar-width: thin;
  background-color: ${draculaTheme.currentLine};
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
export const ServiceBox = styled.div`
  margin: 5px;
  position: relative;

  text-decoration: none;
  padding: 10px;
  width: 350px;
  height: 250px;
  @media (max-width: 991px) {
    width: 300px;
    height: 230px;
  }
  background-color: ${draculaTheme.backgroundSecondary};
  border-radius: 10px;
  overflow: hidden;
  color: #fff;
  :hover .icon img {
    width: 2em;
    transition: 0.5s;
    margin-top: 0;
  }
  :hover .icon h2 {
    font-size: 18px;
  }
  :hover .icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: 30px;
    left: calc(50% - 50px);
    align-items: center;
  }
  :hover div {
    transform: scale(1);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 20px;
  transition: 0.5s;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  justify-content: center;
  z-index: 2;
  background-color: ${draculaTheme.purple};
`;
export const Content = styled.div`
  position: relative;
  padding: 20px;
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-top: 120px;
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

export const Image = styled.img`
  width: 5em;
  filter: hue-rotate(300deg);
  margin-top: 10px;
`;

export const ActionButtonContainer = styled.div`
  position: absolute;
  display: flex;
  top: 15px;
  right: 65px;
  @media (max-width: 991px) {
    right: 35px;
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
    background-color: ${draculaTheme.orange};
    :hover {
      background-color: ${shade(0.2, draculaTheme.orange)};
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
