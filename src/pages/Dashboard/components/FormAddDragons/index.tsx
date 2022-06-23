import { addDragon } from "@src/store/modules/Dragon/async-trunks/add-dragon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Content,
  Input,
  InputContainer,
  InputContainerButton,
  Title,
} from "./styles";
const FormAddDragons: React.FC = () => {
  const dispatch = useDispatch();
  const [props, setProps] = useState<IProps>({
    name: "",
    type: "",
    id: null,
  });
  interface IProps {
    name: string;
    type: string;
    id?: number | null;
  }

  const onSubmit = () => {
    dispatch(addDragon(props));
  };
  return (
    <Container>
      <Title>Adicione seu dragão</Title>
      <Content>
        <InputContainer>
          <Input
            placeholder="Nome do dragão"
            type="text"
            value={props.name}
            onChange={(e) => setProps({ ...props, name: e.target.value })}
          />
          <Input
            placeholder="Tipo"
            type="text"
            value={props.type}
            onChange={(e) => setProps({ ...props, type: e.target.value })}
          />
        </InputContainer>
      </Content>
      <InputContainerButton>
        <button title="Adicionar dragão" onClick={onSubmit}>
          Adicionar
        </button>
      </InputContainerButton>
    </Container>
  );
};

export { FormAddDragons };
