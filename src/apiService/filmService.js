import {request} from "~/utils/httpRequest"

const getFilm = async(id)=>{
    try {
        const res = await request.get(`/film/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
const getFilms = async()=>{
    try {
        const res = await request.get(`/films`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
const getCategories  =async()=>{
    try{
        const res = await request.get(`/categories`)
        return res.data

    }catch(error){
        console.log(error)
    }
}
const getFilmsByCategory = async(categoryID) =>{
    try {
        const res = await request.get(`/films/category?categoryID=${categoryID}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export {
    getFilm,
    getFilms,
    getCategories,
    getFilmsByCategory
}