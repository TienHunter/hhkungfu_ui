import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './FilmsByCategory.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { removeAccents } from '../../utils/common';

import * as filmService from '~/apiService/filmService';
const cx = classNames.bind(styles);

function FilmsByCategoryPage() {
    const [films, setFilms] = useState([]);
    const {categoryID} = useParams()
    useEffect(() => {
        const fetchApi = async () => {
            const res = await filmService.getFilmsByCategory(categoryID);
            setFilms(res);
        };
        fetchApi();
    }, [films]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <h4 className={cx('heading')}>
                            <div className="link-to-page">
                                <span className={cx('h-text')}>Mới nhất</span>
                            </div>
                        </h4>
                    </div>
                    { films && films.length>0 && films.map((film, index) => {
                        // let linkURL = animation.link;
                        return (
                            <div
                                className={cx('col-lg-3', 'col-md-4', 'col-sm-4', 'col-6', 'wrapper', 'grid-item')}
                                key={index}
                                // onClick={() => onDesFilm(linkURL)}
                            >
                                <Link
                                    className={cx('item')}
                                    to={`/${film.id}/${removeAccents(film.filmName)}/description`}
                                >
                                    <img
                                        className={cx('image')}
                                        src={process.env.REACT_APP_STATIC_FILE_URL + film.image}
                                        alt="avatar"
                                    />
                                    {/* {animation.children ? <span className={cx("episode")}>{`Tập ${animation.children[animation.children.length - 1].episode}`}</span> : ''} */}
                                    <div className={cx('overlay')}></div>
                                    <div className={cx('titel-box')}>
                                        <div className={cx('title')}>{film.filmName}</div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                    <div className={cx('col-12')}>
                        <ul className={cx('page-numbers')}>
                            <li>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </li>
                            <li>
                                <span>1</span>
                            </li>
                            <li className={cx('current-page')}>
                                <span>2</span>
                            </li>
                            <li>
                                <span>3</span>
                            </li>
                            <li>
                                <span>4</span>
                            </li>
                            <li>
                                <span>5</span>
                            </li>
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

export default FilmsByCategoryPage;
