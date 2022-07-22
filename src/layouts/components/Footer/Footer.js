import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
   return (
      <div className={cx("wrapper")}>
         <div className={cx("container", "container-footer")}>
            <span className={cx("title-1")}>© Vietsub bởi Hoạt Hình Kungfu Subteam</span>
            <span className={cx("title-2")}>Web phim hhkungfu.tv</span>
         </div>
      </div>
   );
}

export default Footer;