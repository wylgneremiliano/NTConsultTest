import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  BoxForm,
  Container,
  Input,
  ManGif,
  Title,
  Logo,
  SpanError,
} from "./styles";
import manWorkingGif from "@src/assets/man-working.gif";
import logo from "@src/assets/Dragon.png";
import { RootState } from "@src/store";
import { authenticate } from "@src/store/modules/Auth/async-truncks/authenticate";
import { useAuthenticated } from "@src/hooks/useAuthenticated";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useAuthenticated();
  const { error } = useSelector((state: RootState) => state.auth);

  const onChangeEmail = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };
  const onChangePassword = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const onSubmit = async () => {
    const { meta } = await dispatch(authenticate({ email, password }));
    if (meta.requestStatus === "fulfilled") {
      navigate("/dashboard", { replace: true });
    }
  };

  useEffect(() => {
    if (auth) {
      navigate("/dashboard", { replace: true });
    }
  }, [auth]);
  return (
    <Container>
      <Box>
        <ManGif src={manWorkingGif} />
        <BoxForm>
          <Logo src={logo} />
          <Title>Faça seu Login</Title>
          <Input
            placeholder="Insira seu email"
            type="email"
            onChange={onChangeEmail}
            value={email}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={onChangePassword}
            value={password}
          />
          {error && <SpanError>Credênciais incorretas!</SpanError>}

          <button title="Login" onClick={onSubmit}>
            Entrar
          </button>
        </BoxForm>
      </Box>
    </Container>
  );
};

export { Login };
