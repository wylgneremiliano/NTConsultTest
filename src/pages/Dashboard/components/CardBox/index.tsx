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
} from "./styles";
import logo from "@src/assets/Dragon.png";
import { IDragons } from "@src/interfaces/IDragon";
import { useGetListDragons } from "@src/hooks/useGetListDragons";

const CardDragons: React.FC = () => {
  const navigate = useNavigate();
  const dragons = useGetListDragons();
  const onNavigateDetails = (id: number) => {
    navigate(`/Details/${id}`, { replace: true });
  };
  return (
    <Container>
      <Box>
        {dragons.map((item: IDragons, index) => (
          <ServiceBox key={index}>
            <Icon className="icon" onClick={() => onNavigateDetails(item.id)}>
              <Image src={logo} />
            </Icon>
            <Content>
              <h2>{item.name}</h2>
              <p>{item.type}</p>
            </Content>
            <ActionButtonContainer>
              <BoxButton>
                <Edit />
              </BoxButton>
              <BoxButton>
                <Remove />
              </BoxButton>
            </ActionButtonContainer>
          </ServiceBox>
        ))}
      </Box>
    </Container>
  );
};

export { CardDragons };
