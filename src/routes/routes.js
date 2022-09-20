import config from '~/config';

import Home from '~/pages/Home';
import DesFilm from '~/pages/DesFilm';
import FilmsByCategory from '~/pages/FilmsByCategory';
import SearchFilm from '~/pages/SearchFilm';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.desFilm, component: DesFilm },
    { path: config.routes.filmsByCategory, component: FilmsByCategory },
    { path: config.routes.searchFilm, component: SearchFilm },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
