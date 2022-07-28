
import { Link } from "react-router-dom"
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const animations = [
   {
      tilte: "Quân Hữu Vân",
      link: "quan-huu-van",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1",
      children: [
         {
            episode: 1,
            link: "link episode"
         }
      ]
   },
   {
      tilte: "Đấu la đại lục",
      link: "dau-la-dai-luc",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1",
   },
   {
      tilte: "Đấu phá thương khung",
      link: "dau-pha-thuong-khung",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-Pha-Thuong-Khung-OVA-3.jpg?fit=320%2C449&ssl=1",
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   },
   {
      tilte: "Quân Hữu Vân",
      link: "link",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1"
   }

]
function HomePage() {
   // const navigate = useNavigate();
   // const onDesFilm = (data) => {
   //    console.log("check linkURL: ", data);
   //    navigate(data);
   // }
   return (
      <div className={cx("wrapper")}>
         <div className={cx("grid")}>
            <div className={cx("row")}>
               <div className={cx("col-12")}>
                  <h4 className={cx("heading")}>
                     <div className="link-to-page">
                        <span className={cx("h-text")}>Mới nhất</span>
                     </div>
                  </h4>
               </div>
               {animations.map((animation, index) => {
                  // let linkURL = animation.link;
                  return (
                     <div
                        className={cx("col-lg-3", "col-md-4", "col-sm-4", "col-6", "wrapper", "grid-item")}
                        key={index}
                     // onClick={() => onDesFilm(linkURL)}
                     >
                        <Link className={cx("item")} to={animation.link}>
                           <img className={cx("image")} src={animation.image} alt="avatar" />
                           {animation.children ? <span className={cx("episode")}>{`Tập ${animation.children[animation.children.length - 1].episode}`}</span> : ''}
                           <div className={cx("overlay")}></div>
                           <div className={cx("titel-box")}>
                              <div className={cx("title")}>{animation.tilte}</div>
                           </div>
                        </Link>
                     </div>
                  )
               })}
               <div className={cx("col-12")}>
                  <ul className={cx("page-numbers")}>
                     <li>
                        <FontAwesomeIcon icon={faChevronLeft} />
                     </li>
                     <li><span>1</span></li>
                     <li className={cx("current-page")}><span >2</span></li>
                     <li><span>3</span></li>
                     <li><span>4</span></li>
                     <li><span>5</span></li>
                     <li>
                        <FontAwesomeIcon icon={faChevronRight} />
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HomePage;