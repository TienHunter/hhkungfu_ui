import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Films.module.scss';
import { removeAccents } from '~/utils/common';
const cx = classNames.bind(styles);
function Films({ films = [] }) {
    return (
        <>
            {films &&
                films.map((film, index) => {
                    // let linkURL = animation.link;
                    return (
                        <div
                            className={cx('col-lg-3', 'col-md-4', 'col-sm-4', 'col-6', 'wrapper', 'grid-item')}
                            key={index}
                            // onClick={() => onDesFilm(linkURL)}
                        >
                            <Link className={cx('item')} to={`/${film.id}/${removeAccents(film.filmName)}/description`}>
                                <img
                                    className={cx('image')}
                                    src={process.env.REACT_APP_STATIC_FILE_URL + film.image}
                                    alt={film.filmName}
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
        </>
    );
}
export default Films;
