import { Link } from "react-router-dom";
import { Box, BoxForm, Container, Input, ManGif, Title, Logo } from "./styles";
import manWorkingGif from "@src/assets/man-working.gif";
import logo from "@src/assets/Dragon.png";

const Login: React.FC = () => {
  return (
    <Container>
      <Box>
        <ManGif src={manWorkingGif} />
        <BoxForm>
          <Logo src={logo} />
          <Title>Faça seu Login</Title>
          <Input placeholder="Insira seu email" type="email" />
          <Input placeholder="Senha" type="password" />
          <Link to="/dashboard">
            <button title="Login">Entrar</button>
          </Link>
        </BoxForm>
      </Box>
    </Container>
  );
};

export { Login };
