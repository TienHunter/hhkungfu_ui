import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import classNames from 'classnames/bind';
import styles from './DesFilm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardDrive } from '@fortawesome/free-solid-svg-icons';
import * as filmService from '~/apiService/filmService';
const cx = classNames.bind(styles);

function DesFilm() {
    const [film, setFilm] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const { id } = useParams();
    const [episodeView, setEpisodeView] = useState({});
    useEffect(() => {
        const fetchApi = async (id) => {
            const res = await filmService.getFilm(id);
            setFilm(res.film);
            setEpisodes(res.episodes);
        };
        fetchApi(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {episodeView && episodeView.link && episodeView.title ? (
                    <>
                        <iframe
                            width="100%"
                            height="409"
                            src={episodeView.link}
                            title={episodeView.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </>
                ) : (
                    <>
                        <h4 className={cx('heading')}>
                            <span className={cx('h-text')}>Thông tin phim</span>
                        </h4>

                        <div className={cx('row')}>
                            <div className={cx('col-lg-4', 'col-md-5', 'col-sm-6', 'col-6')} style={{ margin: 'auto' }}>
                                <img
                                    className={cx('image')}
                                    src={
                                        film && film.image
                                            ? `${process.env.REACT_APP_STATIC_FILE_URL}/${film.image}`
                                            : ''
                                    }
                                    alt={film && film.filmName ? film.filmName : ''}
                                />
                            </div>
                            <div className={cx('col-lg-8', 'col-md-7', 'col-sm-6', 'col-12', 'infor')}>
                                <h3 className={cx('title')}>{film && film.filmName ? film.filmName : ''}</h3>
                                <p className={cx('lastest')}>
                                    <span className={cx('title')}>Mới nhất: </span>
                                    <span className={cx('episode')}>
                                        Tập{' '}
                                        {episodes && episodes.length > 0 ? episodes[episodes.length - 1].episode : ''}
                                    </span>
                                </p>
                                <p className={cx('category')}>
                                    <span className={cx('title')}>Thể loại:</span>
                                    {film && film.Category && film.Category.categoryName ? (
                                        <Link to={`/category/${film.categoryID}`} className={cx('category-content')}>
                                            {film.Category.categoryName}
                                        </Link>
                                    ) : (
                                        <></>
                                    )}
                                </p>
                            </div>
                        </div>
                    </>
                )}
                <div className={cx('list-episode')}>
                    <div className={cx('le-header')}>
                        <span className={cx('le-title')}>
                            <FontAwesomeIcon icon={faHardDrive} />
                            <span className={cx('le-text')}>FULL HD</span>
                        </span>
                    </div>
                    <ul className={cx('row', 'le-content')}>
                        {episodes &&
                            episodes.length > 0 &&
                            episodes.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => setEpisodeView(item)}
                                        className={cx('episode', 'col-3', 'col-sm-2', 'col-xl-1')}
                                    >
                                        <span
                                            className={cx(
                                                'text',
                                                `${item.episode === episodeView.episode ? 'active' : ''}`,
                                            )}
                                        >
                                            {item.episode}
                                        </span>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <div className={cx('des-film')}>
                    <div className={cx('container')}>
                        <h4 className={cx('heading')}>
                            <span className={cx('h-text')}>Thông tin phim</span>
                        </h4>
                        <div className={cx('des-content')}>{film && film.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesFilm;
