import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./DefaultLayout.module.scss";
import Navbar from "../components/Navbar";
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
   const [scrollNav, setScrollNav] = useState(false);
   const [sticky, setSticky] = useState(0);
   const navbar = useRef();
   useEffect(() => {
      const sticky = navbar.current.offsetTop;
      setSticky(sticky);
   }, [])
   useEffect(() => {
      const handleScroll = () => {
         // console.log('window.scrollY', window.pageYOffset);
         // console.log(sticky);
         setScrollNav(window.pageYOffset >= sticky);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [window.pageYOffset]);
   // console.log("check nav-bar", scrollNav);
   return (
      <div
         className={cx("wrapper")}
      >
         <Header />
         <div ref={navbar} className={scrollNav ? cx("nav-bar", "sticky") : cx("nav-bar")}>
            <Navbar />
         </div>
         <div className={cx("container-default-layout")}>
            <div className={cx("container")}>
               <div className={cx("grid")}>
                  <div className={cx("row")}>
                     <div className={cx("col-md-8", "col-sm-12", "content")}>
                        {children}
                     </div>
                     <div className={cx("col-md-4", "col-sm-12")} >
                        <Sidebar />
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>

   );
}

export default DefaultLayout;