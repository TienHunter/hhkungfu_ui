import { useState, useEffect } from "react";
import { useLocation, Link,useParams } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from "./DesFilm.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardDrive } from "@fortawesome/free-solid-svg-icons";
import * as filmService from "~/apiService/filmService"
const cx = classNames.bind(styles);

function DesFilm() {
   const [film, setFilm] = useState({});
   const {id} = useParams()
   useEffect(() => {
      const fetchApi = async (id)=>{
         const res = await filmService.getFilm(id)
         setFilm(res)
      }
      fetchApi(id)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   return (
      <div className={cx("wrapper")}>
         <div className={cx("container")}>

            <h4 className={cx("heading")}>
               <span className={cx("h-text")}>Thông tin phim</span>
            </h4>

            <div className={cx("row")}>
               <div className={cx("col-lg-4", "col-md-5", "col-sm-6", "col-6")} style={{ margin: "auto" }}>
                  <img className={cx("image")} src={film && film.image ? `${process.env.REACT_APP_STATIC_FILE_URL}/${film.image}` : ""} alt={film && film.filmName ? film.filmName : ""} />
               </div>
               <div className={cx("col-lg-8", "col-md-7", "col-sm-6", "col-12", "infor")}>
                  <h3 className={cx("title")}>{film && film.filmName ? film.filmName : ""}</h3>
                  <p className={cx("lastest")}>
                     <span className={cx("title")}>Mới nhất: </span>
                     <span className={cx("episode")}>Tập {film && film.episodes ? film.episodes[film.episodes.length - 1] : ""}</span>
                  </p>
                  <p className={cx("category")}>
                     <span className={cx("title")}>Thể loại:</span>
                     {film && film.Category && film.Category.categoryName ?

                              <Link to="/" className={cx("category-content")}>{film.Category.categoryName}</Link>

                        :
                        <></>
                     }
                  </p>
               </div>

            </div>
            <div className={cx("list-episode")}>
               <div className={cx("le-header")}>
                  <span className={cx("le-title")}>
                     <FontAwesomeIcon icon={faHardDrive} />
                     <span className={cx("le-text")}>FULL HD</span>
                  </span>
               </div>
               <ul className={cx("row", "le-content")}>
                  {film && film.episodes ?
                     film.episodes.map((item, index) => {

                        return (
                           <li key={index} className={cx("episode", "col-3", "col-sm-2", "col-xl-1")}>
                              <span className={cx("text")}>{item}</span>
                           </li>
                        )
                     }) :
                     <></>
                  }
               </ul>

            </div>
         </div>
         <div className={cx("des-film")}>
            <div className={cx("container")}>
               <h4 className={cx("heading")}>
                  <span className={cx("h-text")}>Thông tin phim</span>
               </h4>
               <div className={cx("des-content")}>
                  {film && film.description}
               </div>
            </div>
         </div>
      </div>
   );
}

export default DesFilm;