import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
const cx = classNames.bind(styles);

function Navbar() {
   return (
      <div className={cx("container", "nar-container")}>
         <button className={cx("btn-nav")}>Primary</button>
         <button className={cx("btn-nav")}>Secondary</button>
         <button className={cx("btn-nav")}>Success</button>
         <button className={cx("btn-nav")}>Danger</button>
         <button className={cx("btn-nav")}>Warning</button>
         <button className={cx("btn-nav")}>Info</button>
         <button className={cx("btn-nav")}>Light</button>
         <button className={cx("btn-nav")}>Dark</button>
      </div>
   );
}

export default Navbar;