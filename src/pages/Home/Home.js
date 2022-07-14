
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const animations = [
   {
      tilte: "Quân Hữu Vân",
      link: "link",
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
   }

]
function HomePage() {
   return (

      <div className={cx("wrapper")}>
         <div className={cx("grid")}>
            <div className={cx("row")}>
               {animations.map((animation, index) => {
                  return (
                     <div className={cx("col-3", "wrapper", "grid-item")} key={index}>
                        <a className={cx("item")} href={animation.link}>
                           <img className={cx("image")} src={animation.image} alt="avatar" />
                           {animation.children ? <span className={cx("episode")}>{`Tập ${animation.children[animation.children.length - 1].episode}`}</span> : ''}
                           <div className={cx("overlay")}></div>
                           <div className={cx("titel-box")}>
                              <div className={cx("title")}>{animation.tilte}</div>
                           </div>
                        </a>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   );
}

export default HomePage;