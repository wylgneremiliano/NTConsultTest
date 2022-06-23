import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/Header";
import {
  ActionButtonContainer,
  BoxButton,
  Container,
  Content,
  Edit,
  Logo,
  Remove,
  Input,
  InputContainer,
  InputContainerButton,
  NotEdit,
} from "./styles";
import logo from "@src/assets/Dragon.png";
import { useEffect, useState } from "react";
import { detailsDragon } from "@src/store/modules/Dragon/async-trunks/details-dragon";
import { RootState } from "@src/store";
import { useNavigate, useParams } from "react-router-dom";
import { editDragon } from "@src/store/modules/Dragon/async-trunks/edit-dragon";
import { deleteDragon } from "@src/store/modules/Dragon/async-trunks/delete-dragon";

const Details: React.FC = () => {
  const { id } = useParams();
  interface IProps {
    name: string;
    type: string;
    id?: number | null;
  }
  const { dragon } = useSelector((state: RootState) => state.dragon);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [props, setProps] = useState<IProps>({
    name: "",
    type: "",
    id: null,
  });

  const onEdit = () => {
    setProps(dragon);
    setCanEdit(!canEdit);
  };
  const voltar = () => {
    navigate("/dashboard");
  };
  const onSubmit = () => {
    setCanEdit(false);
    dispatch(editDragon(props));
  };
  const onDelete = () => {
    dispatch(deleteDragon(id));
    navigate("/dashboard");
  };
  useEffect(() => {
    if (id) {
      dispatch(detailsDragon(id));
    }
  }, [id]);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  return (
    <Container>
      <Header />
      <Content>
        <Logo src={logo} />
        {!canEdit ? (
          <div>
            <h1>{dragon?.name}</h1>
            <p>{dragon?.type}</p>
          </div>
        ) : (
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
        )}
        <ActionButtonContainer>
          <BoxButton>
            {canEdit ? <NotEdit onClick={onEdit} /> : <Edit onClick={onEdit} />}
          </BoxButton>
          <BoxButton>
            <Remove onClick={onDelete} />
          </BoxButton>
        </ActionButtonContainer>
        <InputContainerButton>
          <button title="voltar" onClick={voltar}>
            voltar
          </button>
          <>
            {canEdit && (
              <button title="Confirmar alterações" onClick={onSubmit}>
                Confirmar
              </button>
            )}
          </>
        </InputContainerButton>
      </Content>
    </Container>
  );
};

export { Details };
