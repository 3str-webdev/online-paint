import { useAppSelector } from "./redux/useAppSelector";

export const useGetCurrentTool = () => {
  return useAppSelector((store) => store.tools);
};
