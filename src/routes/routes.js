import Home from "~/pages/Home";
import DesFilm from "~/pages/DesFilm";
import ViewFilm from "~/pages/ViewFilm";
const publicRoutes = [
   { path: "/", component: Home },
   { path: "/:nameFilm", component: DesFilm },
   { path: "/:nameFilm/:episode", component: ViewFilm }, // chưa biết truyền 2 query động đc rồi
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };