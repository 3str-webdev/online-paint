import IndexPage from "../pages/IndexPage/IndexPage";
import { IRoute } from "./routesTypes";

export const mainRoutes: IRoute[] = [
  { id: 1, path: "/", element: <IndexPage /> },
];
