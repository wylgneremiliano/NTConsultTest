import { RootState } from "@store/index";
import { listDragons } from "@store/modules/Dragon/async-trunks/list-dragons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IDragons } from "src/interfaces/IDragon";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { dragons } = useSelector((state: RootState) => state.dragon);

  useEffect(() => {
    dispatch(listDragons());
  }, [dispatch, listDragons]);
  return (
    <Container>
      {dragons.map((item: IDragons, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <p>{item.type}</p>
        </div>
      ))}
    </Container>
  );
};

export { Dashboard };
