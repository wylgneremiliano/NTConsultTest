import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  ServiceBox,
  Icon,
  Box,
  Image,
  ActionButtonContainer,
  BoxButton,
  Edit,
  Remove,
  InputContainer,
  Input,
  InputContainerButton,
  NotEdit,
} from "./styles";
import logo from "@src/assets/Dragon.png";
import { IDragons } from "@src/interfaces/IDragon";
import { useGetListDragons } from "@src/hooks/useGetListDragons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editDragon } from "@src/store/modules/Dragon/async-trunks/edit-dragon";
import { deleteDragon } from "@src/store/modules/Dragon/async-trunks/delete-dragon";

const CardDragons: React.FC = () => {
  interface IProps {
    name: string;
    type: string;
    id?: number | null;
  }
  const dispatch = useDispatch();
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [idDragon, setIdDragon] = useState<number | null>(null);
  const [props, setProps] = useState<IProps>({
    name: "",
    type: "",
    id: null,
  });
  const navigate = useNavigate();
  const dragons = useGetListDragons();
  const onNavigateDetails = (id: number) => {
    navigate(`/Details/${id}`, { replace: true });
  };

  const onEdit = ({ name, type, id }: IProps, idList: number) => {
    if (idList != idDragon) {
      setCanEdit(true);
      setIdDragon(idList);
      setProps({ name, type, id });
      return;
    }
    setProps({ name, type, id });
    setCanEdit(!canEdit);
    setIdDragon(idList);
  };

  const onSubmit = () => {
    setCanEdit(false);
    setIdDragon(null);
    dispatch(editDragon(props));
  };
  const onDelete = (id: number) => {
    dispatch(deleteDragon(id));
  };
  return (
    <Container>
      <Box>
        {dragons &&
          dragons.map((item: IDragons, index) => (
            <ServiceBox key={index}>
              <Icon className="icon" onClick={() => onNavigateDetails(item.id)}>
                <Image src={logo} />
              </Icon>
              <Content>
                {canEdit && idDragon === index ? (
                  <InputContainer>
                    <Input
                      placeholder="Nome do dragão"
                      type="text"
                      value={props.name}
                      onChange={(e) =>
                        setProps({ ...props, name: e.target.value })
                      }
                    />
                    <Input
                      placeholder="Tipo"
                      type="text"
                      value={props.type}
                      onChange={(e) =>
                        setProps({ ...props, type: e.target.value })
                      }
                    />
                  </InputContainer>
                ) : (
                  <div>
                    <h1>{item?.name}</h1>
                    <p>{item?.type}</p>
                  </div>
                )}
              </Content>
              <ActionButtonContainer>
                <BoxButton>
                  {canEdit ? (
                    <NotEdit onClick={() => onEdit(item, index)} />
                  ) : (
                    <Edit onClick={() => onEdit(item, index)} />
                  )}
                </BoxButton>
                <BoxButton>
                  <Remove onClick={() => onDelete(item.id)} />
                </BoxButton>
              </ActionButtonContainer>
              {canEdit && idDragon === index && (
                <InputContainerButton>
                  <button title="Confirmar alterações" onClick={onSubmit}>
                    Confirmar
                  </button>
                </InputContainerButton>
              )}
            </ServiceBox>
          ))}
      </Box>
    </Container>
  );
};

export { CardDragons };
