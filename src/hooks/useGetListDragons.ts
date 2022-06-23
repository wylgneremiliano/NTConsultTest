import { RootState } from "@src/store";
import { useSelector } from "react-redux";

export const useGetListDragons = () => {
  const { dragons } = useSelector((state: RootState) => state.dragon);
  return dragons;
};
