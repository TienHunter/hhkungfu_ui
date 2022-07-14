import classNames from "classnames/bind";
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.scss";
let cx = classNames.bind(styles);
function Search() {


   const [searchValue, setSearchValue] = useState("");
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(false);

   useEffect(() => {
      setSearchResult([1, 2, 3]);
   }, []);
   const handleHideResult = () => {
      setShowResult(false);
   };
   return (

      <HeadlessTippy
         interactive={true}
         visible={showResult && searchResult.length > 0} // customize show, hide tippy
         placement="bottom"
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               Search result...
            </div>
         )}
         onClickOutside={handleHideResult}
      >

         <div className={cx("search")}>
            <input
               value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}
               placeholder="Enter name animation"
               onFocus={() => setShowResult(true)}
            />
            <button className={cx("search-btn")}>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;