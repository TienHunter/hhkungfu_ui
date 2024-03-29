import { request } from '~/utils/httpRequest';

const getFilm = async (id) => {
    try {
        const res = await request.get(`/film/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
const getFilms = async () => {
    try {
        const res = await request.get(`/films`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
const getCategories = async () => {
    try {
        const res = await request.get(`/categories`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
const getCategoryByCategoryID = async (categoryID) => {
    try {
        const res = await request.get(`/category?categoryID=${categoryID}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
const getFilmsByCategory = async (categoryID) => {
    try {
        const res = await request.get(`/films/category?categoryID=${categoryID}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
const getshowtimes = async () => {
    try {
        const res = await request.get(`/showtimes`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
const getFilmsByTimeID = async (timeID) => {
    try {
        const res = await request.get(`/films/showtimes?timeID=${timeID}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
const getFilmsMoreViews = async () => {
    try {
        const res = await request.get(`/films/showmore`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
const getFilmsByfilmName = async (keyFilm) => {
    try {
        const res = await request.get(`/films/search?keyFilm=${keyFilm}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export {
    getFilm,
    getFilms,
    getCategories,
    getFilmsByCategory,
    getCategoryByCategoryID,
    getshowtimes,
    getFilmsByTimeID,
    getFilmsMoreViews,
    getFilmsByfilmName,
};
