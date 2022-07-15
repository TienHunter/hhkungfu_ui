import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

// components

import Search from "../Search";
let cx = classNames.bind(styles);
function Header() {

   return (
      <header className={cx("wrapper")}>
         <div className={cx("content", "container")}>
            <Link to="/">
               <img src={images.logo} alt="lo-go" className={cx("logo")} />
            </Link>
            <Search />

            <div className={cx("book-mark", "col-md-0")}>
               <span className={cx("icon")}><FontAwesomeIcon icon={faBookmark} /></span>
               <span className={cx("title")}>Phim yêu thích</span>
               <span className={cx("count")}>1</span>
            </div>
         </div>
      </header>

   );
}

export default Header;