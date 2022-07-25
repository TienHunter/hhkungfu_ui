import { useState, useRef } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
const cx = classNames.bind(styles);

function Navbar() {
   const [showBars, setShowBars] = useState(false);
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
   return (
      <div className={cx("container", "nar-container")}>
         <ul className={cx("list-btn")} ref={listBtn}>
            <li
               className={cx("menu-bars")}
               onClick={hanldeTogleMenu}
            >
               <FontAwesomeIcon icon={faBars} />
            </li>
            <li><button className={cx("btn-nav")}>Primary</button></li>
            <li><button className={cx("btn-nav")}>Secondary</button></li>
            <li><button className={cx("btn-nav")}>Success</button></li>
            <li><button className={cx("btn-nav")}>Danger</button></li>
            <li><button className={cx("btn-nav")}>Warning</button></li>
            <li><button className={cx("btn-nav")}>Info</button></li>
            <li><button className={cx("btn-nav")}>Light</button></li>
            <li><button className={cx("btn-nav")}>Dark</button></li>
         </ul>
      </div>
   );
}

export default Navbar;