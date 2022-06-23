import { useState } from "react";

import { Container, Column, Logo, Toggle, CloseButton, Logout } from "./styles";
import { useLogout } from "@src/hooks/useLogout";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [toogleButton, setToogleButton] = useState("3dot");
  const navigate = useNavigate();
  const onSubmit = () => {
    useLogout();
    navigate("/Login", { replace: true });
  };
  return (
    <>
      <Container>
        <Logo
          className="Logo"
          onClick={() => navigate("/Dashboard", { replace: true })}
        >
          Dragons
        </Logo>
        {toogleButton === "x" ? (
          <CloseButton onClick={() => setToogleButton("3dot")} />
        ) : (
          <Toggle className="toggle" onClick={() => setToogleButton("x")} />
        )}
        <Column about={toogleButton}>
          <div onClick={onSubmit}>
            <Logout />
            <p>Sair</p>
          </div>
        </Column>
      </Container>
    </>
  );
};

export { Header };
