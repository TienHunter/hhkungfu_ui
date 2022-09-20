import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { convertSearchValue, removeAccents } from '~/utils/common';
import * as filmService from '~/apiService/filmService';
import { Link, useNavigate } from 'react-router-dom';
let cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const debounceValue = useDebounce(convertSearchValue(searchValue), 500);
    const inputRef = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const results = await filmService.getFilmsByfilmName(debounceValue);
            setSearchResult(results);
            setLoading(false);
        };
        fetchApi();
    }, [debounceValue]);
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const hanldeSearchFilm = () => {
        if (searchValue.trim()) {
            navigate(`/films/search/${removeAccents(searchValue)}`);
            setSearchValue('');
        }
    };
    const hanldepressEnter = (event) => {
        if (event.keyCode === 13) {
            hanldeSearchFilm();
        }
    };
    return (
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && searchResult.length > 0} // customize show, hide tippy
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <h4 className={cx('search-title')}>Kết quả tìm kiếm</h4>
                        {searchResult &&
                            searchResult.length > 0 &&
                            searchResult.map((item) => {
                                return (
                                    <Link
                                        to={`/${item.id}/${removeAccents(item.filmName)}/description`}
                                        className={cx('search-item')}
                                        key={item.id}
                                        onClick={() => {
                                            setSearchValue('');
                                        }}
                                    >
                                        <img
                                            className={cx('search-item__img')}
                                            src={process.env.REACT_APP_STATIC_FILE_URL + item.image}
                                            alt={item.filmName}
                                        />
                                        <p className={cx('search-item__filmName')}>{item.filmName}</p>
                                    </Link>
                                );
                            })}
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value[0] === ' ' ? '' : e.target.value)}
                        placeholder="Nhập tên film tìm kiếm"
                        onFocus={() => setShowResult(true)}
                        onKeyDown={(event) => hanldepressEnter(event)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clean')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    <button className={cx('search-btn')} onClick={hanldeSearchFilm}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
