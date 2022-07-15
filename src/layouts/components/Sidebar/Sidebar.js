import { Link } from "react-router-dom"

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);
const listAnimations = [
   {
      title: "Đấu la đại lục",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1",
      link: "./dau-la-dai-luc"
   },
   {
      title: "Đấu Phá Thương Khung OVA - Ước Hẹn 3 Năm",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-Pha-Thuong-Khung-OVA-3.jpg?fit=320%2C449&ssl=1",
      link: "./dau-pha-thuong-khung"
   },
   {
      title: "Đấu la đại lục",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1",
      link: "./dau-la-dai-luc"
   },
   {
      title: "Đấu la đại lục",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1",
      link: "./dau-la-dai-luc"
   },
   {
      title: "Đấu la đại lục",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1",
      link: "./dau-la-dai-luc"
   },
   {
      title: "Đấu la đại lục",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1",
      link: "./dau-la-dai-luc"
   },
   {
      title: "Đấu la đại lục",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1",
      link: "./dau-la-dai-luc"
   },
]
function Sidebar() {
   return (
      <div className={cx("wrapper")}>
         <h4 className={cx("heading")}>
            <span className={cx("h-text")}>Xem nhiều</span>
         </h4>
         <div className={cx("contaienr")}>
            {
               listAnimations.map((item, index) => {
                  return (
                     <div key={index}>
                        <Link to={item.link} className={cx("item")}>
                           <div className={cx("image")}>
                              <img src={item.image} alt={item.title} />
                           </div>
                           <span className={cx("title")}>{item.title}</span>
                        </Link>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
}

export default Sidebar;