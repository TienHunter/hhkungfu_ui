
import { Link } from "react-router-dom"

import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const animations = [
   {
      tilte: "Quân Hữu Vân",
      link: "quan-huu-van",
      image: "https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/Quan-Huu-Van.jpg?fit=320%2C449&ssl=1",
      description: "string text",
      children: [
         {
            episode: 1,
            link: "link episode"
         }
      ]
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
   return (

      <div className={cx("wrapper")}>
         <div className={cx("grid")}>
            <div className={cx("row")}>
               <div className={cx("col-12")}>
                  <h4 className={cx("heading")}>
                     <Link to="/lastest-movie/page/2" className="link-to-page">
                        <span className={cx("h-text")}>Mới nhất</span>
                     </Link>
                  </h4>
               </div>
            </div>
            <div className={cx("row")}>
               {animations.map((animation, index) => {
                  return (
                     <div className={cx("col-md-3", "col-sm-4", "col-6", "wrapper", "grid-item")} key={index}>
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
            </div>
         </div>
      </div>
   );
}

export default HomePage;