import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import * as filmService from '~/apiService/filmService';
import { removeAccents } from '~/utils/common';
const cx = classNames.bind(styles);
const listAnimations = [
    {
        title: 'Đấu la đại lục',
        image: 'https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1',
        link: '/dau-la-dai-luc',
    },
    {
        title: 'Đấu Phá Thương Khung OVA - Ước Hẹn 3 Năm',
        image: 'https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-Pha-Thuong-Khung-OVA-3.jpg?fit=320%2C449&ssl=1',
        link: '/dau-pha-thuong-khung',
    },
    {
        title: 'Đấu la đại lục',
        image: 'https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1',
        link: '/dau-la-dai-luc',
    },
    {
        title: 'Đấu la đại lục',
        image: 'https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1',
        link: '/dau-la-dai-luc',
    },
    {
        title: 'Đấu la đại lục',
        image: 'https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1',
        link: '/dau-la-dai-luc',
    },
    {
        title: 'Đấu la đại lục',
        image: 'https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1',
        link: '/dau-la-dai-luc',
    },
    {
        title: 'Đấu la đại lục',
        image: 'https://i0.wp.com/hhhkungfu.tv/wp-content/uploads/2022/01/Dau-La-Dai-Luc.jpg?fit=320%2C449&ssl=1',
        link: '/dau-la-dai-luc',
    },
];
function Sidebar() {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        const fetchFilms = async () => {
            const res = await filmService.getFilmsMoreViews();
            setFilms(res);
        };
        fetchFilms();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('heading')}>
                <span className={cx('h-text')}>Xem nhiều</span>
            </h4>
            <div className={cx('contaienr')}>
                {films &&
                    films.length > 0 &&
                    films.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link
                                    to={`/${item.id}/${removeAccents(item.filmName)}/description`}
                                    className={cx('item')}
                                >
                                    <div className={cx('image')}>
                                        <img
                                            src={process.env.REACT_APP_STATIC_FILE_URL + item.image}
                                            alt={item.filmName}
                                        />
                                    </div>
                                    <span className={cx('title')}>{item.filmName}</span>
                                </Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Sidebar;
