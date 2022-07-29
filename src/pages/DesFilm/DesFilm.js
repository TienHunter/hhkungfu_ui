import { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from "./DesFilm.module.scss"
import { desFilms } from "~/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardDrive } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function DesFilm() {
   const location = useLocation();
   const [data, setData] = useState({});
   useEffect(() => {
      const { pathname } = location;
      console.log(pathname);
      desFilms.forEach((film) => {
         if (film.link === pathname) {
            const { link, title, image, categories, des, episodes } = film;
            setData({
               link, title, image, categories, des, episodes
            })
         }
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location.pathname])
   // console.log("check data: ", location.pathname);
   return (
      <div className={cx("wrapper")}>
         <div className={cx("container")}>

            <h4 className={cx("heading")}>
               <span className={cx("h-text")}>Thông tin phim</span>
            </h4>

            <div className={cx("row")}>
               <div className={cx("col-lg-4", "col-md-5", "col-sm-6", "col-6")} style={{ margin: "auto" }}>
                  <img className={cx("image")} src={data && data.image ? data.image : ""} alt={data && data.title ? data.title : ""} />
               </div>
               <div className={cx("col-lg-8", "col-md-7", "col-sm-6", "col-12", "infor")}>
                  <h3 className={cx("title")}>{data && data.title ? data.title : ""}</h3>
                  <p className={cx("lastest")}>
                     <span className={cx("title")}>Mới nhất: </span>
                     <span className={cx("episode")}>Tập {data && data.episodes ? data.episodes[data.episodes.length - 1] : ""}</span>
                  </p>
                  <p className={cx("categories")}>
                     <span className={cx("title")}>Thể loại:</span>
                     {data && data.categories ?
                        data.categories.map((category, index) => {
                           return (
                              <Link to="/" className={cx("category")} key={index}>{category}</Link>
                           )
                        })
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
                  {data && data.episodes ?
                     data.episodes.map((item, index) => {

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
                  {data && data.des}
               </div>
            </div>
         </div>
      </div>
   );
}

export default DesFilm;