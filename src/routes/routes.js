import config from "~/config";

import Home from "~/pages/Home";
import DesFilm from "~/pages/DesFilm";
import ViewFilm from "~/pages/ViewFilm";
const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.desFilm, component: DesFilm },
   { path: config.routes.viewFilm, component: ViewFilm }, // chưa biết truyền 2 query động đc rồi
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };