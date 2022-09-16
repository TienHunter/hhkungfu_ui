import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { removeAccents } from '../../utils/common';
import * as filmService from '~/apiService/filmService';
import Paginate from '~/layouts/components/Paginate/Paginate';
const cx = classNames.bind(styles);

function HomePage() {
    const [films, setFilms] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const fetchApi = async () => {
            const res = await filmService.getFilms();
            const result = [...res];
            setFilms(result);
        };
        fetchApi();
    }, []);
    const handleCurrentItem = (data) => {
        setCurrentItems(data);
    };
    console.log('currentItems: ', currentItems);
    return (
        <Paginate res={films} parentCallback={handleCurrentItem}>
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
                        {currentItems &&
                            currentItems.map((film, index) => {
                                return (
                                    <div
                                        className={cx(
                                            'col-lg-3',
                                            'col-md-4',
                                            'col-sm-4',
                                            'col-6',
                                            'wrapper',
                                            'grid-item',
                                        )}
                                        key={index}
                                    >
                                        <Link
                                            className={cx('item')}
                                            to={film.id + '/' + removeAccents(film.filmName) + '/description'}
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
                    </div>
                </div>
            </div>
        </Paginate>
    );
}

export default HomePage;
