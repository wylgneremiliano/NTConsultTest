import { RootState } from "@store/index";
import { listDragons } from "@store/modules/Dragon/async-trunks/list-dragons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styles";
import { CardDragons } from "./components/CardBox";
import { Header } from "./components/Header";
import { FormAddDragons } from "./components/FormAddDragons";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDragons());
  }, [dispatch, listDragons]);
  return (
    <Container>
      <Header />
      <FormAddDragons />
      <CardDragons />
    </Container>
  );
};

export { Dashboard };
