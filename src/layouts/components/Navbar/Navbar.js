import { useState, useRef, useEffect } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import * as filmService from "~/apiService/filmService"
import { Link, NavLink } from "react-router-dom";
const cx = classNames.bind(styles);

function Navbar() {
   const [showBars, setShowBars] = useState(false);
   const [categories,setCategories] = useState([]);
   const listBtn = useRef();
   const hanldeTogleMenu = () => {
      setShowBars(preState => {
         let click = !preState;
         if (click) {
            listBtn.current.style.height = "auto"
         } else {
            listBtn.current.style.height = null
         }
         return click;
      })
   }
   useEffect(() => {
      const fetchApi = async ()=>{
         const res = await filmService.getCategories();
         setCategories(res);
      }
      fetchApi();
   },[])
   return (
      <div className={cx("container", "nar-container")}>
         <ul className={cx("list-btn")} ref={listBtn}
                        onClick={hanldeTogleMenu}
         >
            <li
               className={cx("menu-bars")}
            >
               <FontAwesomeIcon icon={faBars} />
            </li>
            {
               categories.map((item,index)=>
               <NavLink
               className={({isActive})=>isActive ? cx('active'):""}
                to={"/category/" + item.categoryID}
                 key={index} >
                  <li>
                     <button className={cx("btn-nav")} >{item.categoryName}</button>
                  </li>
               </NavLink>
               )
            }
         </ul>
      </div>
   );
}

export default Navbar;