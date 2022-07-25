import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from "./DesFilm.module.scss"

const cx = classNames.bind(styles);

function DesFilm() {
   const location = useLocation();
   useEffect(() => {
      getProfile();
   })

   const getProfile = () => {
      console.log(location.pathname);

   }
   // const usePathname = () => {
   //    const location = useLocation();
   //    return location.pathname;
   //  }
   return (<h1 style={{ color: "red" }}>Film page</h1>);
}

export default DesFilm;