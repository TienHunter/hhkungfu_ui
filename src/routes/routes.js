import Home from "~/pages/Home";
import DesFilm from "~/pages/DesFilm";
import ViewFilm from "~/pages/ViewFilm";
const publicRoutes = [
   { path: "/", component: Home },
   { path: "/:nameFilm", component: DesFilm },
   { path: "/:nameFilm/:episode", component: DesFilm }, // chưa biết truyền 2 query động
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };